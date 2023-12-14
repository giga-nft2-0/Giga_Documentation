"use strict";(self.webpackChunkgiga_documentation=self.webpackChunkgiga_documentation||[]).push([[7534],{343089:function(e){e.exports=JSON.parse('{"operationId":"ContributeDataController_validate","parameters":[{"name":"id","required":true,"in":"path","schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"isValid":{"type":"boolean","example":true}},"required":["isValid"]}}}},"responses":{"201":{"description":""}},"tags":["Contribute"],"security":[{"access-token":[]}],"postman":{"name":"Contribute Data Controller validate","description":{"type":"text/plain"},"url":{"path":["api","v1","contribute","validate",":id"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"isValid\\": \\"<boolean>\\"\\n}"},"auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"ContributeDataController_validate","summary":"ContributeDataController_validate","method":"post","path":"/api/v1/contribute/validate/{id}","hashId":"contribute-data-controller-validate","servers":[],"permalink":"/api/contribute-data-controller-validate","previous":{"title":"ContributeDataController_remove","permalink":"/api/contribute-data-controller-remove"},"next":{"title":"EmailController_create","permalink":"/api/email-controller-create"},"jsonRequestBodyExample":{"isValid":true}}')}}]);