# ztao_check
    本工具是一个辅助切图的切图工具，暂时只支持react的开发环境（当然最好是在react_home的开发环境中），
    这是一个可以运行在开发中，或是开发后的一个库，可以实时校验你的切图和高保真的差距
    
# 安装及引入
    安装：npm install ztao_check 
    
    使用：import Comp from 'ztao_check';
    <Comp>
        <div>
            这是我的切图代码                    
        </div>
    </Comp>
    （用ztao_check的标签，包裹住你需要校验切图标签，就可以实现本工具的引入）
    
    还需要在你的css文件中，引入这个库的css文件
    @import "../../node_modules/ztao_check/build/index.css";（这是在sass文件中引入的方法，
    还有很多其他方法，你可以自行实现）
    
    
# 使用方式
    在你的已引入本插件的切图界面，点击本插件的添加高保真图按钮，将高保真图导入本界面（默认导入时是去除过白色底色的），
    引入后你会看见高保真重叠在切图上，这时你可以点击去除不同的颜色或调整透明度，来实现清晰的观察。
    
![工具图](https://github.com/aiyuekuang/ztao_check/blob/master/img/ztao_check.png?raw=true)

    
