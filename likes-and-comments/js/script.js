
      var likeCount = document.querySelector(".like-count");
      var likeLink = document.querySelector(".like-link");

      function like(event) {
        event.preventDefault();
        var count = parseInt(likeCount.textContent);
        likeCount.textContent = count + 1;
      }
      likeLink.addEventListener("click",like);

      function newComment(text) {
        var nextComment = document.createElement("div");
        nextComment.setAttribute("class","comment");
        nextComment.textContent = text;
        document.querySelector("#comments").appendChild(nextComment);
      }

      var button = document.querySelector("button");

      function comment(event){
        event.preventDefault();
        newComment(document.querySelector("textArea").value);
        document.querySelector("#new-comment-body").value = "";
      }
      button.addEventListener("click",comment);
