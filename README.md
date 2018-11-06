# Traffic light

**Задание:**

Написать скрипт который заставит отверстанный светофор работать :)

**Принцип работы сетофора:**

Сверху вниз. Загорается верхняя лампа красного цвета, горит 20 секунд, 
затем она гаснет и загорается желтая лампа, горит 5 секунд, после чего гаснет. Загорается зеленая лампа, горит 15 секунд и гаснет, затем все идет далше по кругу.
У зеленой лампы должен работать обратный остчет времени, то есть пользователь должен видеть на зеленом фоне белые цифры, отсчитывающие 15 секунд горения этой лампы.

Светофор начинает работать после нажатия на кнопку "Start". При нажатии на
кнопку "Stop" светофор прекращает работу, состояние сбрасывается (то есть все лампы принимают цвет по умолчанию, при последующем нажатии на кнопку "Start" светофор начинает работу сначала, с красного цвета.)

**Задание со звездочкой:**

Добавить возможность ставить светофор на паузу, то есть при нажатии на кнопку "Pause" пользователь продолжает видеть то состояние которое было на момент нажатия, светофор не работает. При последующем нажатии на "Stop", состояние сбрасывается, при нажатии на "Start" светофор продолжает свою работу.
При нажатии на "Pause" в состоянии паузы - ничего не происходит.