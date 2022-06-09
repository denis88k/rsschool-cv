# Denis Khababutdinov

## Contacts:

- **Phone:** +7 927 410 7830<br>
- **E-mail:** denis88.k@mail.ru<br>
- **Discord:** Denis(@denis88k)<br>
- **Telegram:** @denis88k<br>

## About Me:

My goal is to become a Software Engineer. Independently studied HTML, CSS and JS for a year. I made a portfolio, fulfilled orders on frinals.<br>
I want to further develop in this direction to become a specialist in this field.

## Skills:

- *HTML5, CSS3(FlexBox, SCSS, BEM)*
- *JavaScript Basics*
- *GULP*
- *Git, GitHub*
- *VS Code*
- *Adobe Photoshop, Figma, Adobe XD*

## Code example:

**CODEWARS:**
*No one likes carrying change. No one enjoys carrying around spare change. And to avoid all that jingling it's absolutely necessary to have an efficient algorithm to calculate the minimum number of coins needed to pay for something. So given a set of coin denominations determine the fewest number of coins required to add up to a given amount.*

```javascript
function coinsNeeded(amount, coinDenominations) {
  let k;
    for (k = 0; amount > 0;) {
      elMax = Math.max(...coinDenominations);
      c = Math.floor(amount / elMax);
      amount = amount - c * elMax;
      coinDenominations = coinDenominations.filter(el => el <= amount);
      k = k + c;
    };
  return k;
}
```

## Projects:

- **Educational projects(HTML, CSS(CSS), JS, GULP):** [iPochino - landing page](https://denis88k.github.io/portfolio/iPhochino/app/index.html), [Educational projects](https://denis88k.github.io/tests/developerKDA/app/index.html), [Data calculation application](https://denis88k.github.io/ppTechVent/GV_Mixer/index.html), [Landing page](https://denis88k.github.io/tests/KDA/app/index.html)

*In educational projects I used HTML, CSS(SCSS), JS, GULP collector*

## Courses:

- *HTML and CSS:* World Slills, [Freelancer For Life](https://www.youtube.com/c/FreelancerLifeStyle), [MaxGraph - websites as a passion](https://www.youtube.com/c/maxgraph)<br>
- *JavaScript:* [learnjavascript.ru](https://learn.javascript.ru/), [Vladilen Minin](https://www.youtube.com/c/VladilenMinin),  [WebDev from zero. Channel Alex Lushchenko](https://www.youtube.com/c/itgid)<br>

## Languages:

 Language | Level
----------|:-----:
 English   | A1
 Russian   | Native
 Tatar     | Intermediate