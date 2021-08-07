// new post
  async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    console.log(title);

    const post_url = document.querySelector('input[name="post-url"]').value;
    console.log(post_url);
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
    console.log(response);
  }
  
  document.querySelector('#form-new-post').addEventListener('submit', newFormHandler);