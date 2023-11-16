/*
[ProducesResponseType(typeof(ApiResult<DetailVm>), 200)]
public async Task<ApiResult> Get([FromQuery, Required] long id)
{
    var result = new DetailVm();
    return ApiResult.Return(result);
}
------------------
Required errmsg?





how to understand
" _Predicate _Pred " 
in
"     
template <class _Predicate>
void wait(unique_lock<mutex>&_Lck, _Predicate _Pred)  
"

for example 

std::condition_variable g_cv;
g_cv.wait(lock, []() { return !g_queue.empty(); }); // that is ok

--------------------------------------------
I try two example below:

1、
bool isEmpty = g_queue.empty();
g_cv.wait(lock, !isEmpty ); 

2、
bool test(std::queue<int> gque) 
{
    return !gque.empty();
}
g_cv.wait(lock, test(g_queue));


if i want ot define a new function
how can i makt the new


why both of that is error :
"
C2064:term does not evaluate to a function taking ZERO arguments
"

the second param only use lambda fucntion?



eightfold — 今天16:00
it needs a function
because it calls it
Vali — 今天16:00
void wait(unique_lock<mutex>&_Lck, _Predicate _Pred)
:nootlikethis:
eightfold — 今天16:00
ur passing smth that isnt callable
Vali — 今天16:00
casually using reserved names
eightfold — 今天16:00
thats probably not their code lol
Vali — 今天16:01
hopefully not
eightfold — 今天16:01
they would have to be doin using namespace std AND reserved names
Vali — 今天16:01
🤮
eightfold — 今天16:01
it looks like the stl impl naming too
1solaaa — 今天16:04
but, in  seconde example  , i use "test()" function ，why still error?
Ilendur — 今天16:04
You're passing in the return value of a function call, not a callable
eightfold — 今天16:05
it needs a callable
try doin true() and see how it works out

您传递的是函数调用的返回值，而不是可调用的


You're passing in the return value of a function call, not a callable

it needs a callable
try doin true() and see how it works out




on the previous line

bool test(queue<int> g_queue){
    return !g_queue.empty(); 
}

std::condition_variable g_cv;
g_cv.wait(lock, []() { return !g_queue.empty(); } ); // that is ok


How can I replace this part of the code "[]() { return !g_queue.empty(); }" with the function test().






*/

