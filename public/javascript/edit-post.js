// edit post
  async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    console.log(title);

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log(id);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
      
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
    console.log(response);
  }
  
  document.querySelector('#form-edit-post').addEventListener('submit', editFormHandler);