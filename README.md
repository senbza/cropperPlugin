# 组件需要值
#### 截图配置<br>
```pictureOption {
    img: '', // 裁剪图片的地址
    info: true, // 裁剪框的大小信息
    outputSize: 1, // 裁剪生成图片的质量
    full: false, // 输出原图比例截图 props名full
    outputType: 'jpeg', // 裁剪生成图片的格式
    canMove: true, // 能否拖动图片
    original: false, // 上传图片是否显示原始宽高
    canMoveBox: true, // 能否拖动截图框
    canScale: false, // 图片是否允许滚轮缩放
    autoCrop: true, // 是否默认生成截图框
    autoCropWidth: 400, // 默认生成截图框宽度
    autoCropHeight: 300, // 默认生成截图框高度
    fixedBox: false, // 截图框固定大小
    fixed: true, // 是否开启截图框宽高固定比例
    fixedNumber: [4, 3] // 截图框的宽高比例
```
#### 请求地址
```
geturl:'string'
```
# 组件传出事件
#### @finish(data)
#### data值为剪切后的url
```
imageUrl:url
```
# 组件传出事件
```
import ajax from ;//自行配置
import { uploadImg } from //action地址,自行配置
```
