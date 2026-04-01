function makeFriendsList(friends) {
      let ul = document.createElement('ul');
      let listContent = '';
      friends.forEach(friend => {
        listContent += `<li>${friend.firstName} ${friend.lastName}</li>`
      })
      ul.innerHTML = listContent
      return ul
    } 
