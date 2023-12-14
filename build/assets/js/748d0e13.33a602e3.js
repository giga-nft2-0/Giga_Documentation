"use strict";(self.webpackChunkgiga_documentation=self.webpackChunkgiga_documentation||[]).push([[5467],{201705:function(e){e.exports=JSON.parse('{"operationId":"UsersController_addValidator","summary":"Create new user","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"email":{"type":"string","description":"Email of the user","example":"john@doe.com"},"name":{"type":"string","description":"Full Name of the user","example":"John Doe"},"walletAddress":{"type":"string","description":"Ethereum wallet address of the user","example":"0xC67c60cD6d82Fcb2fC6a9a58eA62F80443E32683"},"roles":{"description":"Array of roles associated with the user","example":"[\\"USER\\"]","type":"array","items":{"type":"string"}}},"required":["email","name","walletAddress","roles"]}}}},"responses":{"200":{"description":"The found record","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"email":{"type":"string","description":"Email of the user","example":"john@doe.com"},"name":{"type":"string","description":"Full Name of the user","example":"John Doe"},"walletAddress":{"type":"string","description":"Ethereum wallet address of the user","example":"0xC67c60cD6d82Fcb2fC6a9a58eA62F80443E32683"},"roles":{"description":"Array of roles associated with the user","example":"[\\"USER\\"]","type":"array","items":{"type":"string"}}},"required":["email","name","walletAddress","roles"]}}}}},"403":{"description":"Forbidden."}},"tags":["Users"],"security":[{"access-token":[]}],"postman":{"name":"Create new user","description":{"type":"text/plain"},"url":{"path":["api","v1","users","addAdmin"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"email\\": \\"<string>\\",\\n    \\"name\\": \\"<string>\\",\\n    \\"walletAddress\\": \\"<string>\\",\\n    \\"roles\\": [\\n        \\"<string>\\",\\n        \\"<string>\\"\\n    ]\\n}"},"auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"Create new user","method":"post","path":"/api/v1/users/addAdmin","hashId":"create-new-user","servers":[],"permalink":"/api/create-new-user","previous":{"title":"SchoolController_listUploads","permalink":"/api/school-controller-list-uploads"},"next":{"title":"List all user","permalink":"/api/list-all-user"},"jsonRequestBodyExample":{"email":"john@doe.com","name":"John Doe","walletAddress":"0xC67c60cD6d82Fcb2fC6a9a58eA62F80443E32683","roles":"[\\"USER\\"]"}}')}}]);