---
id: environment-variables 
---

# Environment Variables

The Giga Blocks platform relies on a large set of environment variables to configure backend services, frontends, and worker processes. These variables control authentication, database access, blockchain interactions, and third-party service integrations.

This section explains which variables are required, how they are generated, how to test them, and how they are used.

## Categories of Environment Variables

### Core Application

| Variable | Description |
|----------|-------------|
| `PORT` | Port where the API service listens |
| `NEXT_PUBLIC_ENVIRONMENT` | Environment name (development, staging, production) |
| `CORS_ORIGIN` | Comma-separated list of allowed origins |

### Authentication

| Variable | Description |
|----------|-------------|
| `JWT_SECRET_KEY` | Secret key for signing JWT tokens |
| `JWT_EXPIRATION_TIME` | Standard token lifetime |
| `JWT_EXPIRATION_LONG_TIME` | Extended token lifetime |
| `OTP_SECRET` | Secret key for OTP generation |
| `ENCODED_OTP_SECRET` | Secret used for magic link encoding |
| `OTP_DURATION_IN_SECS` | OTP expiry time in seconds |
| `NEXT_PUBLIC_OTP_DURATION_IN_MINS` | OTP expiry time in minutes (client-side) |
| `MAGIC_LINK_EXPIRATION_TIME_IN_HRS` | Magic link expiry time in hours |

**Generation:**
```javascript
const crypto = require('crypto');
console.log(crypto.randomBytes(32).toString('hex'));
```

### Database (PostgreSQL / Prisma)

| Variable | Description |
|----------|-------------|
| `DB_HOST` | Database host |
| `DB_PORT` | Database port |
| `DB_USERNAME` | Database username |
| `DB_PASSWORD` | Database password |
| `DB_NAME` | Main database name |
| `NEWSLETTER_DB_NAME` | Newsletter database name |
| `DB_SSL` | SSL configuration |
| `DB_SSL_CA` | SSL CA certificate |
| `DB_SSL_CERT` | SSL certificate |
| `DB_SSL_KEY` | SSL key |
| `APP_DATABASE_URL` | Prisma connection string for main DB |
| `NEWSLETTER_DATABASE_URL` | Prisma connection string for newsletter DB |

**Usage:**
- API connects via Prisma ORM
- Newsletter and main DBs kept separate for isolation

### Caching & Queues

| Variable | Description |
|----------|-------------|
| `REDIS_HOST` | Redis host |
| `REDIS_PORT` | Redis port |
| `REDIS_PASSWORD` | Redis password |
| `RABBIT_MQ_HOST` | RabbitMQ host |
| `RABBIT_MQ_PORT` | RabbitMQ port |
| `RABBIT_MQ_USER` | RabbitMQ username |
| `RABBIT_MQ_PASSWORD` | RabbitMQ password |
| `RABBIT_MQ_URL` | RabbitMQ connection URL |

**Usage:**
- Redis → caching + job queues
- RabbitMQ → async messaging between services

### Email

| Variable | Description |
|----------|-------------|
| `SERVICE_PROVIDER` | Email service provider (SMTP / SendGrid / SES) |
| `EMAIL_ADDRESS` | Email address |
| `EMAIL_USER` | Email username |
| `EMAIL_PASSWORD` | Email password |
| `REPLY_TO_EMAIL_ADDRESS` | Reply-to email address |
| `DEBUG_EMAIL_ADDRESS` | Fallback debugging mailbox |

### Blockchain / Explorer

| Variable | Description |
|----------|-------------|
| `PRIVATE_KEY` | Service account key (server-only) |
| `NETWORK_PROVIDER` | RPC URL (server-side) |
| `NEXT_PUBLIC_NETWORK_PROVIDER` | RPC URL (client-side) |
| `NEXT_PUBLIC_DEFAULT_CHAIN` | Default chain name |
| `NEXT_PUBLIC_DEFAULT_CHAIN_ID` | Default chain ID |
| `EXPLORER_API` | Explorer API URL |
| `EXPLORER_API_KEY` | Explorer API key |
| `NEXT_PUBLIC_GAS_API` | Gas estimation API URL |
| `NEXT_PUBLIC_GAS_API_KEY` | Gas estimation API key |

### Storage

| Variable | Description |
|----------|-------------|
| `IPFS_API_KEY` | Pinata API key |
| `IPFS_API_SECRET` | Pinata API secret |
| `ARWEAVE_HOST` | Arweave host |
| `ARWEAVE_PORT` | Arweave port |
| `ARWEAVE_PROTOCOL` | Arweave protocol |
| `ARWEAVE_CONFIG` | Base64-encoded wallet.json |

**Generation:**
```bash
node apps/api/src/utils/arweave/config/createAndFundWallet.ts
cat wallet.json | base64 -w0
```

### Webhook

| Variable | Description |
|----------|-------------|
| `WEBHOOK_PORT` | Webhook service port |
| `ALCHEMY_SIGNING_KEY` | Key for validating Alchemy webhook signatures |

### Privado ID (Verifier & Issuer)

#### Verifier
| Variable | Description |
|----------|-------------|
| `SCHEMA_TYPE` | Schema type |
| `SCHEMA_CONTEXT_URL` | Schema context URL |
| `RESOLVER_URL` | Resolver URL |
| `RESOLVER_ADDRESS` | Resolver address |
| `RESOLVER_NETWORK` | Resolver network |
| `AUDIENCE_DID` | Audience DID |
| `VERIFIER_CREDENTIALS` | Verifier credentials |

#### Issuer
| Variable | Description |
|----------|-------------|
| `ISSUER_USERNAME` | Issuer username |
| `ISSUER_PASSWORD` | Issuer password |
| `DID_ISSUER_URL` | DID issuer URL |
| `ISSUER_DID` | Issuer DID |
| `NEXT_PUBLIC_ISSUER_UI` | Issuer UI URL |

### Maps & UI

| Variable | Description |
|----------|-------------|
| `UNI_OOI_GIGA` | API key for Giga integration |
| `NEXT_PUBLIC_GIGA_MAPS_API` | Giga Maps API URL |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox token for UI maps |

### Batch Processing

| Variable | Description |
|----------|-------------|
| `BATCH_SIZE` | General batch size for jobs |
| `IMAGE_BATCH_SIZE` | Batch size for NFT image generation |

## Testing Environment Variables

### Pre-run Validation (Startup)

Check required variables exist and have valid format:

- **Addresses**: Must match pattern `^0x[0-9a-fA-F]{40}$`
- **URLs**: Must be valid URL format
- **Numbers**: Must parse correctly as integers/floats
- **Required fields**: All mandatory variables must be present

### Sanity Probes

Test basic functionality with these endpoints:

```bash
# Health check
curl http://localhost:${PORT}/health
# Expected: {"status":"ok"}

# Version info
curl http://localhost:${PORT}/version
# Expected: Shows APP_VERSION, GIT_SHA

# Subgraph connectivity
# Should return latest activation data
```

### Negative Tests

Verify proper error handling:

- **Blank `SUBGRAPH_URL`** → Service should fail at startup
- **Wrong `SCHOOL_NFT_ADDR`** → Should fail validation
- **Invalid `JWT_SECRET_KEY`** → Authentication should fail

### Post-deploy Checks

After deployment, verify:

- **Smart contracts** are callable (`symbol()`, `name()` methods)
- **Subgraph** is synced (< N blocks behind)
- **Alchemy webhook** signature verification passes
- **OTP emails** are delivered in staging environment

## Usage Notes

### Server-only vs Client-safe

**Client-safe variables** (prefixed with `NEXT_PUBLIC_`):
- Safe to expose in frontend bundles
- Can be accessed by browser JavaScript
- Examples: `NEXT_PUBLIC_ENVIRONMENT`, `NEXT_PUBLIC_NETWORK_PROVIDER`

**Server-only variables** (no prefix):
- **Never** expose to client-side
- Secrets and sensitive configuration
- Examples: `JWT_SECRET_KEY`, `DB_PASSWORD`, `PRIVATE_KEY`, `REDIS_PASSWORD`

### CI/CD Integration

**Build-time generation:**
- Generate `.env.runtime` (server-side variables)
- Generate `.env.public` (client-safe variables)
- Inject secrets per environment (dev, staging, prod)

### Environment Templates

Maintain these template files for onboarding:

- `.env.example.api` - API service variables
- `.env.example.giga` - Giga-specific variables  
- `.env.example.admin` - Admin panel variables
- `.env.example.webhook` - Webhook service variables

Each template should contain placeholder values and clear descriptions for easy setup.