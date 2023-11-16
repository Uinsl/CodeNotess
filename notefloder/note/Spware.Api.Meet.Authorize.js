/*Controller 特性

02-meet/AuthorizeController.cs
登录验证-token-

[SwaggerTag("会议管理授权认证接口")]
[ApiExplorerSettings(GroupName = DocsConstant.INSIDE_AUTH)]

[HttpPost]
[EnableThrottling(2, 2, RateLimitPeriod.Sec)]
https://likely.blog.csdn.net/article/details/105681419
-- 限制API接口恶意访问 --

[ProducesResponseType(typeof(TokenResponse), 200)]
[ProducesResponseType(typeof(ApiResult), 400)]
https://blog.csdn.net/josjiang1/article/details/121358990
--指定返回信息描述和状态码--


账密%登录 token验证 函数
public async Task<ActionResult> Token(
[FromQuery, Required] string apikey,
[FromQuery, Required] string secretkey,
[FromQuery] string identity = null){}

[FromQuery]
-- https://blog.csdn.net/yuanchuang123456/article/details/126279295 --

--------------------------
修饰属性
LoginSmsFm.cs
特性
 [Required(ErrorMessage = "手机号码不能为空")]
https://blog.51cto.com/u_15162069/2755296
用来提示前端错误。

[StringLength(20)]
[MinLength(4, ErrorMessage = "验证码不正确")]
https://www.cnblogs.com/guozhe/p/5126989.html

----             if (ModelState.IsValid) ---
--- 是编程语言里的一个代码片断。
ASP.NET MVC单元测试Action测试时会用到ModelState.IsValid 
单纯从意思方面看可以理解为：如果(模型状态.有效),则 ---

----------------------------
JWT验证




*/
