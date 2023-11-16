/*
//排班错误：
TypeError: api.getList is not a function


        /// <summary>
        /// 班次设置新增
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        [Perm(MP.EDIT | MP.ADD, nameof(MisPerm.BASIC_WORKTIME))]
        [ProducesResponseType(typeof(ApiResult<long>), 200)]
        public async Task<ApiResult> Create([FromBody] CreateWorktimeModel model)
        {
            if (!ModelState.IsValid)
            {
                return ModelState.ToApiResult();
            }

            var result = await _worktimeService.Create(model);

            if (!result) return result;

            var entity = result.Result;

            var logModel = this.GetLogModel();

            logModel.Xid = new[] { entity.seq };
            logModel.Mark = "班次设置新增";
            logModel.Contnet = model.ToJson();
            await _logService.LogAsync(logModel);

            return ApiResult.Return(entity.seq);
        }


班次新增的sql

        public async Task<ApiResult<WorktimeEntity>> Create(CreateWorktimeModel model)
        {
            var time = DateTime.Now;

            var entity = new WorktimeEntity
            {
                name = model.name,
                times = model.times,
                types = model.types ?? 0,
                ahead = model.ahead ?? 0,
                after = model.after ?? 0,
                hours = model.hours ?? 0,
                weeks = model.weeks ?? 0,
                holiday = model.holiday ?? 0,
                remark = model.remark
            };

            using var conn = _factory.Open();

            await conn.InsertAsync(entity);

            return ApiResult.Return(entity);
        }

        public async Task<ApiResult> Update(UpdateWorktimeModel model)
        {
            var entity = await Get(model.id);

            if (entity == null)
            {
                return ApiResult.Error("没有查询到数据");
            }

            var time = DateTime.Now;

            using var conn = _factory.Open();

            await conn.UpdateAsync<WorktimeEntity>(new
            {
                model.name,
                model.times,
                types = model.types ?? 0,
                ahead = model.ahead ?? 0,
                after = model.after ?? 0,
                hours = model.hours ?? 0,
                weeks = model.weeks ?? 0,
                holiday = model.holiday ?? 0,
                model.remark
            }, q => q.seq == model.id);

            return ApiResult.True;
        }
山东辛亥
3.4年
中专
74
















*/