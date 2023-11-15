/*
https://www.imooc.com/article/286382

qt-camera-eng-link
https://doc.qt.io/qt-6.2/qtmultimedia-multimediawidgets-camera-example.html



Camera Example
Shows how to capture a still image or record video. or video.

The Camera Example demonstrates 
how you can use Qt Multimedia to implement some basic Camera functionality 
to take still images and record video clips with audio.

[ record video]
[still images]
[implement]
相机示例演示了如何使用实现一些基本的相机功能来拍摄静止图像和录制带有音频的视频剪辑。

To run the example from Qt Creator, 
open the Welcome mode and select the example from Examples. 
For more information, visit Building and Running an Example.

The example implements a Camera class that acts as our camera interface.

It has a user interface, control functions, 
setting values and a means of defining the location
where the image or video clip is to be saved. 

It will also store the image and video settings.

[store]

若要从 中运行示例，请打开“欢迎”模式，然后从“示例”中选择示例。有关更多信息，请访问。

该示例实现了一个类，该类充当我们的相机接口。
它具有用户界面、控制功能、设置值和定义图像或视频剪辑保存位置的方法。
它还将存储图像和视频设置。




The Camera class uses:

An instance of QCamera, the API class interface to the hardware.
An instance of QImageCapture to take still images.
An instance of QMediaRecorder to record video. 
It also contains the user interface object.
The Camera constructor does some basic initialization:

The user interface is initialized.
UI signals are connected to slots that react to the triggering event.
However, most of the work is done when the setCamera() function is called, 

[instance]
[constructor]
[react to the triggering event.]
















*/
