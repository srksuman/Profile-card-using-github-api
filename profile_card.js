fetch('https://api.github.com/users/srksuman')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data['avatar_url'])
        var img = `<img src="${data['avatar_url']}" width=250 alt="">`
        document.getElementById('avatar').innerHTML = img;
        document.getElementById('bio').innerHTML = data['bio']

        var username = `<a href="github.com/${data['login']}" style="color:white;">${data['login']}</a>`
        document.getElementById('username').innerHTML = username;

        document.getElementById('following').innerHTML = data['following']
        document.getElementById('followers').innerHTML = data['followers']
        document.getElementById('location').innerHTML = data['location']

        var website = `<a href="github.com/${data['blog']}" style="color:white;">sumanrajkhanal</a>`

        document.getElementById('blog').innerHTML = website


        fetch('https://api.github.com/users/'+data['login']+'/repos')
            .then(res => res.json())
            .then(data => {
                var list_show = ''
                var list_fork = ''
                var num = 0;
                data.forEach(element => {
                    if (element['fork'] == false) {
                        list_show += `<li><a href="https://github.com/srksuman/${element['name']}" target="_blank" style="color:white; text-decoration:none;">${element['name']}</a></li> <hr>`
                        num++;
                    } else {
                        list_fork += `<li><a href="https://github.com/srksuman/${element['name']}" target="_blank" style="color:white; text-decoration:none;">${element['name']}</a></li> <hr>`

                    }

                });

                var list_c = `<ol>${list_show}</ol>`
                var list_fo = `<ol>${list_fork}</ol>`
                document.getElementById('list-show').innerHTML = list_c;
                document.getElementById('list-show-forked').innerHTML = list_fo;

                document.getElementById('total_number').innerHTML = data.length;
                document.getElementById('public-repo').innerHTML = num;
                document.getElementById('public-for').innerHTML = data.length - num;

                console.log(num)


            })


    })

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }