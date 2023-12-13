"use strict";(self.webpackChunkgiga_documentation=self.webpackChunkgiga_documentation||[]).push([[4762],{889196:function(e){e.exports=JSON.parse('{"operationId":"ContributeDataController_create","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"contributed_data":{"type":"string","example":"{\\"key\\": \\"value\\"}","description":"JSON value with key value pair"},"status":{"type":"string","example":"Pending","enum":["Validated","Rejected","Pending"]},"contributedUserId":{"type":"string","example":"1c0ebe70-f286-473c-bb9c-165db6af77c7","description":"User ID of user who contributed the data."},"school_Id":{"type":"string","example":"school-id"},"season_ID":{"type":"string","example":"season-id"}},"required":["contributed_data","status","contributedUserId","school_Id","season_ID"]}}}},"responses":{"201":{"description":""}},"tags":["Contribute"],"security":[{"access-token":[]}],"postman":{"name":"Contribute Data Controller create","description":{"type":"text/plain"},"url":{"path":["api","v1","contribute"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"contributed_data\\": \\"<string>\\",\\n    \\"status\\": \\"<string>\\",\\n    \\"contributedUserId\\": \\"<string>\\",\\n    \\"school_Id\\": \\"<string>\\",\\n    \\"season_ID\\": \\"<string>\\"\\n}"},"auth":{"type":"bearer","bearer":[{"type":"any","value":"<Bearer Token>","key":"token"}]}},"description":"ContributeDataController_create","summary":"ContributeDataController_create","method":"post","path":"/api/v1/contribute","hashId":"contribute-data-controller-create","servers":[],"permalink":"/api/contribute-data-controller-create","previous":{"title":"Delete an user","permalink":"/api/delete-an-user"},"next":{"title":"ContributeDataController_findAll","permalink":"/api/contribute-data-controller-find-all"},"jsonRequestBodyExample":{"contributed_data":"{\\"key\\": \\"value\\"}","status":"Pending","contributedUserId":"1c0ebe70-f286-473c-bb9c-165db6af77c7","school_Id":"school-id","season_ID":"season-id"}}')}}]);