/*
https://blog.csdn.net/weixin_44307528/article/details/104766533

QT += multimedia
QT += multimediawidgets


#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QCamera>
#include <QCameraViewfinder>
#include <QCameraImageCapture>
#include <QCameraInfo>
#include <QDateTime>
#include <QMessageBox>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void on_startBt_clicked();

    void on_photographBt_clicked();

    void take_photo(int id, const QImage &image);

private:
    Ui::MainWindow *ui;
    //摄像头对象指针
    QCamera* Camera;
    //摄像头的取景器
    QCameraViewfinder* CameraViewFinder;
    //存储摄像机设备信息
    QList<QCameraInfo> CameraInfoList;
    //记录摄像头内容
    QCameraImageCapture* CameraImageCapture;
    //照片的名字
    QString ImageName;
};

#endif // MAINWINDOW_H


#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    //若连接到多个摄像头设备，获取可使用的摄像头信息
    CameraInfoList = QCameraInfo::availableCameras();
    //遍历，将摄像头信息逐个添加到下拉列表当中
    QList<QCameraInfo>::const_iterator it;
    for(it=CameraInfoList.begin(); it!=CameraInfoList.end(); it++)
    {
        ui->deviceComboBox->addItem((*it).description());
    }
}

MainWindow::~MainWindow()
{
    delete ui;
}

//打开摄像头设备
void MainWindow::on_startBt_clicked()
{
    //获取到要打开的设备的名称
    QCameraInfo CameraInfo = CameraInfoList.at(ui->deviceComboBox->currentIndex());
    //创建摄像头对象
    Camera = new QCamera(CameraInfo);
    //创建取景器并将其附在要显示的区域
    CameraViewFinder = new QCameraViewfinder(ui->CameraLabel);
    Camera->setViewfinder(CameraViewFinder);
    //调整摄像头数据显示的大小
    CameraViewFinder->resize(ui->CameraLabel->width(), ui->CameraLabel->height());
    //显示摄像头取景器
    CameraViewFinder->show();
    //开启摄像头
    Camera->start();

    //创建获取一帧数据对象
    CameraImageCapture = new  QCameraImageCapture(Camera);
    //关联图像获取信号
    connect(CameraImageCapture, &QCameraImageCapture::imageCaptured, this, &MainWindow::take_photo);
}

//点击了拍照按键
void MainWindow::on_photographBt_clicked()
{
    //发送获取一帧数据的信号
    CameraImageCapture->capture();
}

void MainWindow::take_photo(int id, const QImage &image)
{
    //使用系统时间来命名图片的名称，时间是唯一的，图片名也是唯一的
    QDateTime dateTime(QDateTime::currentDateTime());
    QString time = dateTime.toString("yyyy-MM-dd-hh-mm-ss");
    //创建图片保存路径名
    QString filename = QString("./%1.jpg").arg(time);
    //保存一帧数据
    image.save(filename);
    //提示获取到了一帧数据
    QMessageBox::information(this, "提示：", "获取到一帧图片");
}


*/