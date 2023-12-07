/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2021, 12, 11) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 13500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>Anniversary : <span className="date-text">{d}</span> days <span className="date-text">{hour}</span> hours <span className="date-text">{minute}</span> minutes <span className="date-text">{second}</span> seconds </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>Chào người yêu</h1>
                    <p >Chắc ngừoi yêu bất ngờ lắm, nhưng khoan！Music!</p>
                    <p>Chắc người yêu còn nhớ bài nhạc này nhỉ! Thật ra khi đó anh chọn bài này là vì anh muốn nói là anh đã tìm được
                        người mà anh nhất định sẽ yêu bằng cả con tim này...
                    </p>
                    <p>Mới đó mà đã 2 năm rồi ngừoi yêu nhờ! Anh còn nhớ cái khuôn mặt đỏ bừng vào ngày anh nói anh thích em.
                        Cho đến bây giờ anh vẫn yêu những lúc ngừoi yêu cảm thấy hạnh phúc với những điều nhỏ nhặt ngu ngốc mà anh đã làm 
                        cho ngừoi yêu
                </p>
                    <p>Anh lần đầu viết bức thư như này là để nói xin lỗi ngừoi yêu vì những lần anh vô tâm không chú ý đến cảm xúc của người
                        yêu. Có thể anh không đẹp trai như TaeHyung, không hát hay như TaeHyung, không viết được những thứ ý nghĩa và cảm động
                        như Bray. Đôi lúc anh làm người yêu buồn nhưng anh mong là ngừoi yêu vẫn biết rằng dù có xảy ra chuyện gì anh vẫn luôn 
                        bên cạnh ngừoi yêu ạ.
                    </p>
                    <p>Anh cảm ơn người yêu đã dành khoảng thời gian tươi đẹp nhất của bản thân để bên cạnh một ngừoi không có gì ngoài bàn 
                        phím như anh :). Anh không hứa sẽ biến ngừoi yêu thành ngừoi hạnh phúc nhất trên đời nhưng anh dám hứa là anh sẽ yêu 
                        ngừoi yêu đến cộng lông cuối cùng của anh ạ.
                    </p>
                    <p>Hôm nay là ngày kỷ niệm 2 năm anh mong chúng ta sẽ tiếp tục trên con đường của nhau, sẽ cùng nhau trải qua những tháng 
                        ngày tuyệt vời nhất cùng nhau. Mong cho chúng ta sẽ tiếp tục đón thêm nhiều ngày kỷ niệm hơn nữa. 
                    </p>
                    <p>Anh yêu em nhiều nhiều！ Người yêu sẽ mãi là cực cưng nhỏ bé của anh ♡♡♡</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>VN♥BT</p>
                        <p>2023/11/12</p>
                    </div>
                </div>
                <audio id="audio" src={url} loop></audio>
            </div>

        )
    }
}
export default Main