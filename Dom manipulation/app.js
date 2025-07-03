// DOM SELECTION AND MANIPULATION

// 1. Selecting by ID
const heading = document.getElementById('main-heading');
heading.style.color = 'red';

// 2. Selecting by class name
const notes = document.getElementsByClassName('text');
notes[0].textContent = 'Loaded from JavaScript!';
notes[1].style.fontStyle = 'italic';

// 3. Selecting by tag name
const paragraphs = document.getElementsByTagName('p');
paragraphs[0].style.fontWeight = 'bold';

// 4. querySelector
const firstNote = document.querySelector('.note p');
firstNote.classList.add('highlighted');

// 5. querySelectorAll
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => p.style.color = 'red');

// 6. Creating and appending elements
const container = document.querySelector('#card-container');

const users = [
  { name: 'Alice', image: 'https://i.pravatar.cc/60?img=1', title: 'Designer' },
  { name: 'Bob', image: 'https://i.pravatar.cc/60?img=2', title: 'Developer' },
  { name: 'Charlie', image: 'https://i.pravatar.cc/60?img=3', title: 'Manager' }
];

users.forEach(user => {
  // Create card
  const card = document.createElement('div');
  card.classList.add('card');

  // Create profile section
  const profile = document.createElement('div');
  profile.classList.add('profile');

  const avatar = document.createElement('img');
  avatar.setAttribute('src', user.image);
  avatar.setAttribute('alt', `${user.name}'s photo`);
  avatar.classList.add('avatar');

  const info = document.createElement('div');
  const name = document.createElement('h2');
  name.textContent = user.name;

  const title = document.createElement('p');
  title.textContent = user.title;

  // Append elements
  info.appendChild(name);
  info.appendChild(title);
  profile.appendChild(avatar);
  profile.appendChild(info);
  card.appendChild(profile);
  container.appendChild(card);

  // -----------------------------
  // 📌 EVENT HANDLING ON CARDS
  // -----------------------------

  // 1. Click event
  card.addEventListener('click', () => {
    alert(`You clicked on ${user.name}'s card`);
  });

  // 2. Mouseover / Mouseout
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = '#e0f7fa';
  });
  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = 'white';
  });

  // 3. Double click
  card.addEventListener('dblclick', () => {
    card.style.border = '2px dashed red';
  });

  // 4. Right click (context menu)
  card.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert(`Right-clicked on ${user.name}'s card`);
  });
});

// -----------------------------
// 📌 EVENT HANDLING OUTSIDE CARDS
// -----------------------------

// 5. Keydown and Keyup
document.addEventListener('keydown', (e) => {
  console.log('Key down:', e.key);
});
document.addEventListener('keyup', (e) => {
  console.log('Key up:', e.key);
});

// 6. Input and Change
const input = document.createElement('input');
input.placeholder = 'Type something...';
input.style.display = 'block';
input.style.marginTop = '20px';
document.body.appendChild(input);

input.addEventListener('input', () => {
  heading.textContent = input.value || 'User Profiles';
});

input.addEventListener('change', () => {
  console.log('Input value changed (on blur)');
});

// 7. Mouseenter / Mouseleave on heading
heading.addEventListener('mouseenter', () => {
  heading.style.transform = 'scale(1.05)';
});
heading.addEventListener('mouseleave', () => {
  heading.style.transform = 'scale(1)';
});

// 8. Submit event using a fake form
const form = document.createElement('form');
form.innerHTML = `
  <input type="text" name="username" placeholder="Username" required />
  <button type="submit">Submit</button>
`;
form.style.marginTop = '20px';
document.body.appendChild(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted!');
});


// // 7. Remove element
// const toRemove = document.querySelector('.note p:last-child');
// toRemove.remove();

// // 8. Parent traversal
// const notePara = document.querySelector('.note p');
// const parent = notePara.parentElement;
// parent.style.backgroundColor = '#fff0f0';
// parent.style.padding = '10px';