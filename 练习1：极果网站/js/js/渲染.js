function xuanran(an,sl,jg,n) {
        var json_ = new XMLHttpRequest() || new ActiveXObject();
        var xuanran_ = document.getElementsByClassName('xuanran_')[0];
        var shuju=new Array();
        var shuju2=new Array();
        an=0?an='/useing/public':an='/useing/master'
        json_.open('get', 'http://192.168.0.124:3000'+an, true);
        json_.send();
        json_.onreadystatechange = function () {
            if (json_.readyState == 4) {
                if (json_.status == 200) {
                    var res = JSON.parse(json_.responseText);
                    for(i=0;i<res.length;i++){
                        res[i].img=res[i].img.replace('http://192.168.1.13:3000','http://192.168.0.124:3000')
                        if(res[i].info_ty=="首发"){
                            res[i].class="sf"
                        }else{
                            res[i].class="ty"
                        }
                        res[i].rand_num = Math.floor(Math.random()*3);
                        if(res[i].rand_num==0){
                            res[i].sclass="js"
                            res[i].text2="查看报告：8"
                        }else if(res[i].rand_num==1){
                            res[i].sclass="sq"
                            res[i].text2="查看试用名单"
                        }else{
                            res[i].text2="剩余时间2天"
                            res[i].sclass="jx"
                        }
                        if(sl==1){
                            if(res[i].class=="ty"){
                                shuju.push(res[i])
                                console.log(shuju);
                            }
                        }else{
                            shuju=res
                        }
                    }
                    for(j=0;j<shuju.length;j++){
                                    if(jg==0){
                                        shuju2=shuju
                                    }else if(jg==1){
                                        if(shuju[j].rand_num==2){
                                            shuju2.push(shuju[j])
                                        }
                                    }else if(jg==2){
                                        if(shuju[j].rand_num==1){
                                            shuju2.push(shuju[j])
                                        }
                                    }else if(jg==3){
                                        if(shuju[j].rand_num==0){
                                            shuju2.push(shuju[j])
                                        }
                                    }
                                }
                    var html_1 = template('my', {
                        a: shuju2.slice(0,n)
                    })
                    xuanran_.innerHTML = html_1
                }
            }
        }
    }