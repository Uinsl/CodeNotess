/*

linux  
内核原理
消息机制 --进程通信
IO操作机制

多线程 && 线程间通信

RS485/232 CAN MobBus 协议
TCP/IP HTTP websocke 协议
LINUX下的QT

SOCKET ok
多线程 stuing

不适合入门
 C++ 文档 [in,out] 
 https://www.nuomiphp.com/eplan/544009.html

// sockaddr_in myaddr;
// myaddr.sin_port = htons(8000);
// inet_pron(AF_INEF,""127.0.0.1,&myadde.sin_addr.s_addr);
// myaddr.sin_family = AF_INEF;

inet_pron 

available 
invalid 无效的 INVALID

//https://blog.csdn.net/weixin_44966641/article/details/118939975
int WSAAPI connect
(
    [in] SOCKET         s,
    [in] const sockaddr *name,
    [in] int            namelen
);

const sockaddr *name 指针



//
    sockaddr_in service;
    service.sin_family = AF_INET;
    service.sin_addr.s_addr = inet_addr("127.0.0.1");
    // 所以s_addr怎么来的？
    // 不是区分大小写吗
    service.sin_port = htons(27015);

    struct sockaddr_in {
        short   sin_family;
        u_short sin_port;
        struct  in_addr sin_addr;
        char    sin_zero[8];
    };

    struct in_addr {
        union {
            struct {
            u_char s_b1;
            u_char s_b2;
            u_char s_b3;
            u_char s_b4;
            } S_un_b;
            struct {
            u_short s_w1;
            u_short s_w2;
            } S_un_w;
            u_long S_addr;
        } S_un;
    };


13 8 15 = 35

// 80KM - 6-10L  = 8L 8.4￥/L 64=1400
// 
80km 70￥ * 22 = 1540
900-1000

15+15+8 = 40

*/