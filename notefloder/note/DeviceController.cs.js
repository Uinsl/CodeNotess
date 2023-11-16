/*
[Auth(AuthRole.MEET)]
-- 应该是授权相关的 --
https://www.itguest.com/post/bffigd1a2.html

[SwaggerTag("设备管理")]
API网页上的标签

[Area("Meet")]
[Route("[area]/basic/[controller]/[action]")]

[Produces("application/json")]
--- produces属性指定了响应的内容类型为"application/json;charset=UTF-8"，
即JSON格式的响应，并且设置了字符编码为UTF-8。 --

[ApiExplorerSettings(GroupName = DocsConstant.INSIDE_MEETBASIC)]
-- 生产环境API接口暴露设置 --
https://blog.csdn.net/laosunlaiye/article/details/122174543

--------
[HttpGet]
[Perm(nameof(MeetPerm.MEET_DEVICE))]
-- 排序之类的 --
[ProducesResponseType(typeof(ApiResult<DetailFmt>), 200)]
------------------------------------








*/