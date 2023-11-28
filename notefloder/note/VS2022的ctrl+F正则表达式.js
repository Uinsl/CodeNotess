/*

\s{4}\/\/\/\s<summary>\n\s+\/\/\/\s([\u4e00-\u9fa5]+)$\n\s+\/\/\/\s<\/summary>\n\s+\[Column\(Name = "(.*?)", IsNullable = false, StringLength = (\d+)\)\]
   
    /// <summary>
    /// $1
    /// </summary>
    [Required(ErrorMessage = "$1不能为空")]
    [StringLength($3)]



解读：
\s：匹配空格
\s{4}：匹配4个空格
\：转义字符
\/\/\/： 匹配 三个斜杠 ///
\s+: 多个空格
([\u4e00-\u9fa5]+)$： 匹配中文，多个
\[ 和 \]  : 匹配[ ]
\( 和 \): 匹配（ ）
"(.*?)"： 匹配 “” 内的内容，例子： Name = "name"
(\d+)： 匹配数字，例子：StringLength = 160
\n: 换行符


注意替换内容需要带空格；
由于VS中的ctrl+F,不能换行，建议用vscode使用，然后复制粘贴；

效果：
    /// <summary>
    /// 名称
    /// </summary>
    [Column(Name = "name", IsNullable = false, StringLength = 160)]
    public string name { get; set; } = string.Empty;

=>
    /// <summary>
    /// 名称
    /// </summary>
    [Required(ErrorMessage = "名称不能为空")]
    [StringLength(160)]
    public string name { get; set; } = string.Empty;


*/