var NUM_OF_SNOWFLAKES = 50;
for(var i = 0; i < NUM_OF_SNOWFLAKES; i++) {
  var snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.classList.add(`flakes-${i + 1}`);
  snowflake.style.zIndex = getRandomInt(100, 110);
  snowflake.style.opacity = 1 / getRandomInt(1, 10);
  document.body.appendChild(snowflake);  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}