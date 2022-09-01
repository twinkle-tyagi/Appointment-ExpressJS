        function store(event)
        {
            event.preventDefault();
            let name = event.target.username.value;
            let email = event.target.emailId.value;
            let phone = event.target.phoneNum.value;
            //let key1 = email; // as unique key
            let obj = {
                name: name,
                email: email,
                phone: phone
            }

            axios.post("localhost:3000/addUser",obj)
            .then(res => showUsers(obj))
            .catch(err => console.log(err))
        }

        function showUsers(obj)
        {
            document.getElementById('username').value = ' ';
            document.getElementById('emailId').value = ' ' ;
            document.getElementById('phoneNum').value = ' ';  

            // get parent node where to add (ul)
            const parentNode = document.getElementById('userlist');

            const childNode = `<li id=${obj._id}> username = ${obj.name}, Email-Id = ${obj.email}, Phone Number = ${obj.phone} 
                <button onclick = deleteUser('${obj._id}')> X </button> 
                <button onclick = editUser('${obj._id}')> Edit </button> </li>`
            
            //parentNode.innerHTML = childNode; // this will overwrite previous li in innerHTML.

            // to add new li each time and not overwrite
            parentNode.innerHTML = parentNode.innerHTML + childNode;
        }

        
        function deleteUser(userId)
        {
            /*
            axios.delete(`https://crudcrud.com/api/4dd48498d2894d619ed028bd923a3547/AppointmentData/${userId}`)
            .then(() => {
                removeFromScreen(userId);
            })
            .catch();
        */        } 

        /*
        function removeFromScreen(email)
        {
            const parentNode = document.getElementById('userlist');
            const child = document.getElementById(email);

            // test if element to delete exist or not. If we try to delete element which is not present it will trow error
            if(child)
            {
                parentNode.removeChild(child); 
            }

        } */

        // removeFromScreen function when passing userId instead of email
        function removeFromScreen(userId)
        {
            const parentNode = document.getElementById('userlist');
            const child = document.getElementById(userId);

            // test if element to delete exist or not. If we try to delete element which is not present it will trow error
            if(child)
            {
                parentNode.removeChild(child); 
            }

        }

        // to edit user 3 steps:
        // 1. populate the text field on web page with previous value.
        // 2. remove from li.
        // 3. remove from storage.

        function editUser(userId)
        {
            
            axios.get(`https://localhost:3000/editUser${userId}`)
            .then((res)=> {
                // populate fields in on page.
                document.getElementById('username').value = res.data.name;
                document.getElementById('emailId').value = res.data.email;
                document.getElementById('phoneNum').value = res.data.phone;

                deleteUser(userId);
            })
            .catch();
        }

        window.addEventListener('DOMContentLoaded', () =>
        {
            axios.get("https://localhost:3000/addUser")
            .then((res) => {
                for(var i =0; i< res.data.length; i++) {
                    showUsers(res.data[i]);
                }
            })
            .catch(err => console.log(err));
        });
        
