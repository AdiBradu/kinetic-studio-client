import React from 'react';
import './Logo.component.scss';
import variables from '../../styles/_variables.module.scss';

export default function Logo() {
  return (
    <svg className='logo-navbar' viewBox="0 0 128 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58.3484 20.8808L56.6824 22.6175V25.7559H53.8279V13.345H56.6824V19.1425L62.1795 13.345H65.3705L60.2279 18.8766L65.6725 25.7559H62.3207L58.3484 20.8808Z" fill={variables.textLight}/>
        <path d="M67.1252 13.345H69.9978V25.7559H67.1252V13.345Z" fill={variables.textLight}/>
        <path d="M84.5027 13.345V25.7559H82.144L75.9557 18.2201V25.7559H73.1177V13.345H75.4945L81.6647 20.8808V13.345H84.5027Z" fill={variables.textLight}/>
        <path d="M97.2347 23.4513V25.7494H87.624V13.345H97.0098V15.643H90.4785V18.3382H96.2416V20.5722H90.4785V23.4448L97.2347 23.4513Z" fill={variables.textLight}/>
        <path d="M102.262 15.684H98.2979V13.345H109.113V15.684H105.141V25.7559H102.262V15.684Z" fill={variables.textLight}/>
        <path d="M110.834 13.345H113.707V25.7559H110.834V13.345Z" fill={variables.textLight}/>
        <path d="M119.333 25.145C118.334 24.6175 117.5 23.826 116.921 22.8568C116.332 21.8557 116.03 20.7111 116.05 19.5493C116.032 18.3902 116.334 17.2486 116.923 16.25C117.5 15.2775 118.334 14.4824 119.333 13.952C120.314 13.4572 121.39 13.1783 122.488 13.1341C123.586 13.09 124.68 13.2815 125.698 13.6959C126.547 14.0584 127.298 14.617 127.889 15.3259L126.046 17.0314C125.669 16.5706 125.192 16.2007 124.652 15.9492C124.113 15.6977 123.523 15.5711 122.927 15.5787C122.209 15.5658 121.499 15.7406 120.869 16.0859C120.275 16.4124 119.786 16.9008 119.459 17.4942C119.127 18.1288 118.953 18.8346 118.953 19.551C118.953 20.2674 119.127 20.9731 119.459 21.6077C119.786 22.202 120.275 22.691 120.869 23.0177C121.499 23.3614 122.208 23.5356 122.926 23.5233C123.524 23.5298 124.115 23.4002 124.655 23.1443C125.196 22.8883 125.671 22.5127 126.044 22.046L127.889 23.7481C127.299 24.4646 126.545 25.0278 125.69 25.3896C124.764 25.7785 123.769 25.9719 122.765 25.9575C121.571 25.9776 120.391 25.6983 119.333 25.145Z" fill={variables.textLight}/>
        <path d="M54.8354 39.1861C54.4598 39.0801 54.1085 38.9016 53.8013 38.6609L54.1624 38.0273C54.4445 38.2408 54.7617 38.4035 55.0997 38.5082C55.4789 38.6328 55.8757 38.6954 56.2749 38.6937C56.8166 38.6937 57.2188 38.61 57.4781 38.4409C57.6006 38.3664 57.7011 38.2608 57.7694 38.1347C57.8378 38.0087 57.8715 37.8669 57.8671 37.7236C57.8722 37.6271 57.8555 37.5306 57.8183 37.4414C57.7811 37.3522 57.7243 37.2725 57.6521 37.2082C57.4935 37.0769 57.3089 36.9807 57.1104 36.9258C56.824 36.8483 56.5336 36.7864 56.2405 36.7404C55.8478 36.6717 55.4597 36.5791 55.0783 36.463C54.7895 36.373 54.5299 36.2076 54.3265 35.9837C54.1074 35.7222 53.9964 35.3869 54.0163 35.0464C54.0129 34.808 54.0676 34.5724 54.1757 34.3598C54.2838 34.1473 54.442 33.9644 54.6368 33.8268C55.0515 33.5095 55.6277 33.3513 56.3652 33.3524C56.7532 33.3534 57.1394 33.4047 57.5142 33.5051C57.8502 33.5858 58.1707 33.7211 58.463 33.9056L58.1133 34.549C57.5962 34.2023 56.9843 34.0245 56.3619 34.0402C55.8498 34.0402 55.4641 34.131 55.2047 34.3127C55.0843 34.3879 54.9851 34.4927 54.9167 34.6171C54.8483 34.7415 54.813 34.8814 54.814 35.0234C54.8095 35.1244 54.827 35.2251 54.8653 35.3186C54.9035 35.4121 54.9617 35.4962 55.0356 35.5651C55.1917 35.7068 55.3789 35.8098 55.5822 35.8655C55.88 35.947 56.1819 36.0128 56.4867 36.0624C56.8745 36.131 57.2581 36.2215 57.6357 36.3333C57.9166 36.4206 58.1697 36.5802 58.3694 36.7962C58.5844 37.0468 58.6939 37.371 58.6747 37.7006C58.6799 37.9455 58.6223 38.1877 58.5074 38.4041C58.3924 38.6205 58.224 38.8038 58.0181 38.9366C57.5804 39.2419 56.9786 39.3946 56.2126 39.3946C55.7455 39.3962 55.281 39.3259 54.8354 39.1861Z" fill={variables.textLight}/>
        <path d="M71.1849 38.976C71.0224 39.1183 70.8317 39.2246 70.6252 39.2879C70.3991 39.3597 70.1632 39.3957 69.926 39.3946C69.3679 39.3946 68.9389 39.2441 68.6391 38.9432C68.3392 38.6423 68.1882 38.2166 68.186 37.6662V34.0747H67.1355V33.3968H68.1975V32.0984H69.0002V33.3968H70.8058V34.0747H69.0002V37.6218C68.9797 37.9155 69.0752 38.2054 69.2661 38.4294C69.367 38.5257 69.4868 38.6 69.6179 38.6475C69.749 38.695 69.8886 38.7146 70.0277 38.7052C70.1907 38.7056 70.3527 38.6789 70.507 38.6264C70.6546 38.5779 70.7912 38.5009 70.9092 38.3999L71.1849 38.976Z" fill={variables.textLight}/>
        <path d="M85.8997 33.3968V39.3388H85.1332V38.2538C84.9267 38.6096 84.6255 38.9011 84.2632 39.0958C83.873 39.2999 83.4379 39.4027 82.9976 39.3946C82.2229 39.3946 81.6112 39.1757 81.1625 38.738C80.7138 38.3003 80.4895 37.6662 80.4895 36.8356V33.3885H81.2922V36.7683C81.2922 37.3942 81.4465 37.8686 81.7551 38.1914C82.0636 38.5197 82.5052 38.6838 83.0764 38.6838C83.3489 38.6975 83.6213 38.6537 83.8758 38.5553C84.1303 38.4569 84.3613 38.3061 84.5537 38.1126C84.9148 37.7318 85.0954 37.2027 85.0954 36.5253V33.4066L85.8997 33.3968Z" fill={variables.textLight}/>
        <path d="M101.476 30.9576V39.3389H100.708V38.1636C100.48 38.5503 100.15 38.8666 99.754 39.0779C99.341 39.2936 98.8805 39.4026 98.4146 39.3947C97.8852 39.4015 97.3633 39.269 96.9012 39.0106C96.4539 38.7589 96.086 38.3871 95.8392 37.9371C95.5879 37.4519 95.4568 36.9134 95.4568 36.367C95.4568 35.8206 95.5879 35.2822 95.8392 34.797C96.0858 34.3485 96.4539 33.9787 96.9012 33.73C97.3647 33.4759 97.8861 33.3459 98.4146 33.3525C98.87 33.3445 99.3206 33.447 99.7278 33.6512C100.118 33.8534 100.447 34.1553 100.683 34.5261V30.9576H101.476ZM99.6063 38.395C99.9425 38.202 100.217 37.9173 100.397 37.5743C100.586 37.1996 100.685 36.7858 100.685 36.3662C100.685 35.9466 100.586 35.5328 100.397 35.1581C100.217 34.8151 99.9425 34.5304 99.6063 34.3374C99.2643 34.1431 98.8768 34.0434 98.4836 34.0485C98.086 34.0424 97.694 34.1421 97.3477 34.3374C97.0115 34.5304 96.7371 34.8151 96.5565 35.1581C96.3676 35.5328 96.2692 35.9466 96.2692 36.3662C96.2692 36.7858 96.3676 37.1996 96.5565 37.5743C96.7371 37.9173 97.0115 38.202 97.3477 38.395C97.6942 38.5898 98.0862 38.6889 98.4836 38.6823C98.8767 38.6878 99.2642 38.5887 99.6063 38.395Z" fill={variables.textLight}/>
        <path d="M111.607 31.9295C111.553 31.8764 111.511 31.8129 111.483 31.7429C111.454 31.6729 111.441 31.5979 111.443 31.5224C111.441 31.4488 111.455 31.3757 111.484 31.3076C111.512 31.2396 111.554 31.1781 111.607 31.1268C111.719 31.0199 111.869 30.9603 112.024 30.9603C112.18 30.9603 112.329 31.0199 112.442 31.1268C112.495 31.1765 112.537 31.2369 112.566 31.3039C112.594 31.3709 112.608 31.4431 112.606 31.5158C112.606 31.6319 112.571 31.7452 112.506 31.8416C112.441 31.938 112.35 32.0132 112.243 32.0579C112.136 32.1025 112.018 32.1146 111.904 32.0927C111.79 32.0707 111.685 32.0157 111.602 31.9344L111.607 31.9295ZM111.618 33.3969H112.421V39.339H111.618V33.3969Z" fill={variables.textLight}/>
        <path d="M123.437 39.0056C122.984 38.7514 122.609 38.3779 122.353 37.9256C122.093 37.4469 121.957 36.9109 121.957 36.3662C121.957 35.8215 122.093 35.2855 122.353 34.8068C122.608 34.3559 122.983 33.9848 123.437 33.735C123.914 33.4827 124.445 33.3508 124.985 33.3508C125.524 33.3508 126.055 33.4827 126.532 33.735C126.984 33.9855 127.358 34.3566 127.611 34.8068C127.866 35.2868 128 35.8223 128 36.3662C128 36.91 127.866 37.4455 127.611 37.9256C127.357 38.3776 126.984 38.7512 126.532 39.0056C126.056 39.2609 125.525 39.3945 124.985 39.3945C124.444 39.3945 123.913 39.2609 123.437 39.0056ZM126.119 38.395C126.454 38.2027 126.727 37.9177 126.905 37.5743C127.091 37.1986 127.187 36.7852 127.187 36.3662C127.187 35.9471 127.091 35.5337 126.905 35.1581C126.727 34.8146 126.454 34.5297 126.119 34.3374C125.771 34.1477 125.38 34.0484 124.984 34.0484C124.587 34.0484 124.197 34.1477 123.849 34.3374C123.513 34.5305 123.239 34.8152 123.059 35.1581C122.869 35.5325 122.77 35.9464 122.77 36.3662C122.77 36.786 122.869 37.1999 123.059 37.5743C123.239 37.9172 123.513 38.2018 123.849 38.395C124.197 38.5835 124.587 38.6822 124.984 38.6822C125.38 38.6822 125.77 38.5835 126.119 38.395Z" fill={variables.textLight}/>
        <path d="M36.7679 0L15.0073 23.4119L38.0433 52.5262V0H36.7679Z" fill={variables.textLight}/>
        <path d="M23.2609 0H0V24.5379L23.2609 0Z" fill={variables.textLight}/>
        <path d="M0 39.2453V52.5262H23.8617L7.05328 31.89L0 39.2453Z" fill={variables.textLight}/>
    </svg>
  )
}
