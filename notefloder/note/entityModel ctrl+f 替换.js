/*
    /// <summary>
    /// 单位简码
    /// </summary>
    [Column(Name = "find", IsNullable = false, StringLength = 80)]
    public string find { get; set; } = string.Empty;

\s{4}\/\/\/\s<summary>\n\s+\/\/\/\s([\u4e00-\u9fa5]+)$\n\s+\/\/\/\s<\/summary>\n\s+\[Column\(Name = "(.*?)", IsNullable = false, StringLength = (\d+)\)\]
   
    /// <summary>
    /// $1
    /// </summary>
    [Required(ErrorMessage = "$1不能为空")]
    [StringLength($3)]


//---------------------------------
有备注版本

    /// <summary>
    /// 账册格式
    /// </summary>
    [Required(ErrorMessage = "账册格式不能为空")]
    [StringLength(60)]
    public string book { get; set; } = string.Empty;


\s{4}\/\/\/\s<summary>\n\s+\/\/\/\s([\u4e00-\u9fa5]+);(.*)\n\s+\/\/\/\s<\/summary>\n\s+\[Column\(Name = "(.*?)", IsNullable = false, StringLength = (\d+)\)\]


    /// <summary>
    /// $1
    /// </summary>
    [Required(ErrorMessage = "$1不能为空")]
    [StringLength($4)]

//-----------------

    /// <summary>
    /// 预算金额
    /// </summary>
    [Column(Name = "give", IsNullable = false)]
    public decimal give { get; set; }

\s{4}\/\/\/\s<summary>\n\s+\/\/\/\s([\u4e00-\u9fa5]+)$\n\s+\/\/\/\s<\/summary>\n\s+\[Column\(Name = "(.*?)", IsNullable = false\)\]

    /// <summary>
    /// $1
    /// </summary>
    [Required(ErrorMessage = "$1不能为空")]






    */