function reg(an) {
        var ajax_ = new XMLHttpRequest() || new ActiveXObject();
        ajax_.open('post', 'http://192.168.0.124:3000/'+an, true);
        ajax_.setRequestHeader(
            'content-type',
            'application/x-www-form-urlencoded'
        )
        var data_ = '&phone=' + sjh.value + '&code=' + img_code.value + '&username=' + username.value + '&password=' +
            psw1
            .value;
        ajax_.send(data_);
        ajax_.onreadystatechange = function () {
            if (ajax_.readyState == 4) {
                console.log(data_);
                if (ajax_.status == 200) {
                    var neirong = JSON.parse(ajax_.responseText)
                    alert(neirong.msg)
                }
            }
        }
    }
