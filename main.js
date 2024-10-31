let todoInput = document.getElementById('todoInput');
        let timeInput = document.getElementById('timeInput');
        let addBtn = document.getElementById('addBtn');
        let todoList = document.getElementById('todoList');

        addBtn.onclick = () => {
            const task = todoInput.value.trim();
            const time = (+timeInput.value);

            if (task && time > 0) {
                addTodo(task, time);
                todoInput.value = '';
                timeInput.value = '';
            }
        }

        const addTodo = (task, time) => {
            let li = document.createElement('li');
            const taskText = document.createElement('span');
            const timeDiv = document.createElement('div');
            const buttonDiv = document.createElement('div');
            const doneBtn = document.createElement('div');
            const deleteBtn = document.createElement('div');
            const cancelBtn = document.createElement('div');

            taskText.textContent = task;
            
           
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            timeDiv.textContent = `дедлайн до ${time} числа - создано в ${formattedTime}`;
            timeDiv.setAttribute('class', 'time');
           

            buttonDiv.setAttribute('class', 'button');
            doneBtn.setAttribute('class', 'done-btn');
            doneBtn.textContent = 'Готово';
            deleteBtn.setAttribute('class', 'delete-btn');
            deleteBtn.textContent = 'Удалить';
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Отменить';
            cancelBtn.style.display = 'none';
            
           
            doneBtn.onclick = () => {
                li.classList.add('done');
                doneBtn.style.display = 'none';
                cancelBtn.style.display = 'block';
            };
          
            cancelBtn.onclick = () => {
                li.classList.remove('done');
                doneBtn.style.display = 'block';
                cancelBtn.style.display = 'none';
            };
           
            deleteBtn.onclick = () => {
                todoList.removeChild(li);
                
            };
            
            
            buttonDiv.append(doneBtn);
            buttonDiv.append(cancelBtn);
            buttonDiv.append(deleteBtn);
           
            li.append(taskText);
            li.append(timeDiv);
            li.append(buttonDiv);
            todoList.append(li);
             
            
           
        }
          
      