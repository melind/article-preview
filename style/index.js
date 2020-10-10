
  function show() {

                          /** show tooltip */

        let share = document.getElementById('hidden').classList.add('tooltip-wrapper');
        
                             /** schange icon color */
        let icon = document.getElementsByClassName('icon')[0];
        icon.style.backgroundColor = "hsl(214, 17%, 51%)";

        let iconColor = document.getElementsByClassName('colorChange')[0];
        iconColor.style.filter = "brightness(200%) grayscale(100%)";

                /** mobile version hide creator show how to share */

        let shareMobile = document.getElementById('hide').classList.add('creator-mobile');

        let mobile = document.getElementById('show').classList.add('creator-hide');
    };
  