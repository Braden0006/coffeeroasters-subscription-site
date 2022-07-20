import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <svg
        width="218"
        height="24"
        viewBox="0 0 218 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.8319 21.5112C69.8319 21.9791 69.5962 22.2131 69.1248 22.2131H60.82C60.6194 22.2131 60.4564 22.1546 60.331 22.0376C60.2056 21.9206 60.1429 21.7554 60.1429 21.5418C60.1429 21.3587 60.1856 21.2112 60.2708 21.0993C60.3561 20.9874 60.489 20.8959 60.6695 20.8247L61.3164 20.6263C61.4769 20.5754 61.6023 20.4788 61.6926 20.3364C61.7828 20.194 61.828 19.9906 61.828 19.7261V10.9073C61.828 10.7649 61.7929 10.6454 61.7227 10.5487C61.6524 10.4521 61.5221 10.3631 61.3315 10.2817L60.4589 9.99185C60.2282 9.87996 60.0627 9.76044 59.9624 9.6333C59.8621 9.50615 59.8119 9.35103 59.8119 9.16794C59.8119 8.98485 59.8746 8.83482 60 8.71785L60.0493 8.67672C60.1694 8.58717 60.326 8.54239 60.5191 8.54239H61.8393L61.8289 8.45323C61.8007 8.27491 61.7302 8.10374 61.6173 7.93972C61.4669 7.72103 61.2964 7.47436 61.1058 7.19973C60.9152 6.9251 60.7447 6.59706 60.5943 6.21562C60.4438 5.83419 60.3686 5.36375 60.3686 4.80431C60.3686 3.47182 60.82 2.40634 61.7227 1.60787C62.6254 0.809393 63.9092 0.410156 65.5742 0.410156C66.6474 0.410156 67.5375 0.583074 68.2446 0.92891C68.9517 1.27475 69.4808 1.73501 69.8319 2.30971C70.1829 2.88441 70.3584 3.51251 70.3584 4.19401C70.3584 4.99757 70.1503 5.60024 69.7341 6.00202C69.3178 6.4038 68.7837 6.60469 68.1318 6.60469C67.4096 6.60469 66.8279 6.37074 66.3866 5.90285C65.9453 5.43495 65.7246 4.81448 65.7246 4.04143V2.68352C65.7246 2.32751 65.6544 2.06559 65.514 1.89776C65.3736 1.72993 65.1579 1.64601 64.867 1.64601C64.4959 1.64601 64.2151 1.77316 64.0245 2.02745C63.834 2.28174 63.7387 2.64792 63.7387 3.12599C63.7387 3.61422 63.8515 4.07195 64.0772 4.49916C64.3029 4.92637 64.5812 5.3256 64.9122 5.69687C65.2432 6.06813 65.5742 6.42414 65.9051 6.76489C66.2361 7.10564 66.5145 7.44131 66.7401 7.77189L66.8045 7.87098C66.9263 8.06902 67.0076 8.26615 67.0482 8.46236L67.0619 8.54239H69.2903C69.5209 8.54239 69.699 8.5907 69.8243 8.68733C69.9497 8.78397 70.0124 8.934 70.0124 9.13743C70.0124 9.44258 69.882 9.69178 69.6212 9.88505C69.3605 10.0783 68.9492 10.1749 68.3876 10.1749H67.3194V19.6803C67.3194 19.9651 67.362 20.1838 67.4473 20.3364C67.5325 20.489 67.6704 20.5805 67.861 20.611L69.1549 20.8094C69.3855 20.8399 69.556 20.9137 69.6664 21.0306C69.7767 21.1476 69.8319 21.3078 69.8319 21.5112ZM40.2084 21.8622C39.3057 22.2995 38.2526 22.5182 37.049 22.5182C35.7752 22.5182 34.6343 22.2487 33.6262 21.7096C32.6182 21.1705 31.8234 20.3898 31.2416 19.3676C30.6599 18.3453 30.369 17.1018 30.369 15.6371C30.369 14.2233 30.6724 12.9594 31.2792 11.8456C31.886 10.7318 32.7311 9.85199 33.8143 9.20609C34.8975 8.56019 36.1613 8.23724 37.6056 8.23724C38.8393 8.23724 39.8799 8.42033 40.7275 8.78651C41.575 9.15269 42.2219 9.64855 42.6683 10.2741C43.1146 10.8997 43.3377 11.599 43.3377 12.372C43.3377 13.1857 43.1046 13.824 42.6382 14.2868C42.1718 14.7496 41.5374 14.981 40.735 14.981C39.9125 14.981 39.2882 14.7445 38.8619 14.2716C38.4356 13.7986 38.2225 13.1501 38.2225 12.3262V11.3498C38.2225 10.8514 38.1322 10.475 37.9517 10.2207C37.7711 9.96642 37.5154 9.83927 37.1844 9.83927C36.8534 9.83927 36.555 9.97405 36.2892 10.2436C36.0234 10.5131 35.8178 10.9175 35.6724 11.4566C35.5269 11.9957 35.4542 12.6619 35.4542 13.4553C35.4542 14.5945 35.6222 15.5507 35.9582 16.3237C36.2942 17.0967 36.7531 17.6765 37.3348 18.063C37.9166 18.4496 38.5785 18.6428 39.3208 18.6428C40.063 18.6428 40.6848 18.5335 41.1863 18.3148C41.6878 18.0961 42.074 17.7274 42.3448 17.2086C42.4952 17.0662 42.6131 16.9747 42.6983 16.934C42.7836 16.8933 42.8663 16.873 42.9466 16.873C43.0469 16.8831 43.1296 16.9315 43.1948 17.0179C43.26 17.1044 43.2876 17.2391 43.2776 17.4222C43.1973 18.4191 42.8914 19.2989 42.3598 20.0618C41.8282 20.8247 41.1111 21.4248 40.2084 21.8622ZM55.5016 21.557C54.3732 22.1775 53.0618 22.4877 51.5673 22.4877C50.113 22.4877 48.8367 22.1851 47.7384 21.5799C46.6401 20.9747 45.7851 20.1381 45.1732 19.07C44.5614 18.002 44.2555 16.7662 44.2555 15.3625C44.2555 14.0198 44.5764 12.8119 45.2184 11.7388C45.8603 10.6657 46.7479 9.81384 47.8813 9.1832C49.0147 8.55256 50.3186 8.23724 51.793 8.23724C53.2574 8.23724 54.5362 8.54239 55.6295 9.15269C56.7227 9.76299 57.5753 10.6072 58.1871 11.6854C58.7989 12.7636 59.1048 14.0096 59.1048 15.4235C59.1048 16.7662 58.7864 17.969 58.1495 19.0319C57.5126 20.0948 56.6299 20.9365 55.5016 21.557ZM52.7107 20.9009C52.3998 20.962 52.0964 20.8246 51.8005 20.489C51.5046 20.1533 51.2238 19.5888 50.958 18.7954C50.6922 18.002 50.439 16.9594 50.1982 15.6676C49.9675 14.3758 49.8372 13.3129 49.8071 12.4788C49.777 11.6447 49.8372 11.0141 49.9876 10.5869C50.1381 10.1597 50.3687 9.91047 50.6797 9.83927C50.9906 9.77824 51.294 9.91556 51.5899 10.2512C51.8858 10.5869 52.1691 11.1514 52.4399 11.9448C52.7107 12.7382 52.9665 13.7808 53.2072 15.0726C53.4479 16.3644 53.5808 17.4299 53.6059 18.269C53.631 19.1082 53.5658 19.7414 53.4103 20.1686C53.2549 20.5958 53.0217 20.8399 52.7107 20.9009ZM79.6261 22.2131C80.0975 22.2131 80.3332 21.9791 80.3332 21.5112C80.3332 21.3078 80.2781 21.1476 80.1677 21.0306C80.0574 20.9137 79.8869 20.8399 79.6562 20.8094L78.3623 20.611C78.1718 20.5805 78.0339 20.489 77.9486 20.3364C77.8634 20.1838 77.8207 19.9651 77.8207 19.6803V10.1749H78.8889C79.4506 10.1749 79.8618 10.0783 80.1226 9.88505C80.3834 9.69178 80.5138 9.44258 80.5138 9.13743C80.5138 8.934 80.4511 8.78397 80.3257 8.68733C80.2003 8.5907 80.0223 8.54239 79.7916 8.54239H77.5633L77.5495 8.46236C77.5089 8.26615 77.4277 8.06902 77.3058 7.87098L77.2415 7.77189C77.0158 7.44131 76.7375 7.10564 76.4065 6.76489C76.0755 6.42414 75.7445 6.06813 75.4135 5.69687C75.0826 5.3256 74.8042 4.92637 74.5785 4.49916C74.3529 4.07195 74.24 3.61422 74.24 3.12599C74.24 2.64792 74.3353 2.28174 74.5259 2.02745C74.7165 1.77316 74.9973 1.64601 75.3684 1.64601C75.6593 1.64601 75.8749 1.72993 76.0153 1.89776C76.1558 2.06559 76.226 2.32751 76.226 2.68352V4.04143C76.226 4.81448 76.4466 5.43495 76.8879 5.90285C77.3293 6.37074 77.911 6.60469 78.6332 6.60469C79.2851 6.60469 79.8192 6.4038 80.2354 6.00202C80.6517 5.60024 80.8598 4.99757 80.8598 4.19401C80.8598 3.51251 80.6843 2.88441 80.3332 2.30971C79.9822 1.73501 79.4531 1.27475 78.746 0.92891C78.0389 0.583074 77.1487 0.410156 76.0755 0.410156C74.4105 0.410156 73.1267 0.809393 72.224 1.60787C71.3213 2.40634 70.87 3.47182 70.87 4.80431C70.87 5.36375 70.9452 5.83419 71.0956 6.21562C71.2461 6.59706 71.4166 6.9251 71.6072 7.19973C71.7977 7.47436 71.9683 7.72103 72.1187 7.93972C72.2315 8.10374 72.3021 8.27491 72.3303 8.45323L72.3406 8.54239H71.0204C70.8273 8.54239 70.6707 8.58717 70.5506 8.67672L70.5014 8.71785C70.376 8.83482 70.3133 8.98485 70.3133 9.16794C70.3133 9.35103 70.3635 9.50615 70.4638 9.6333C70.5641 9.76044 70.7296 9.87996 70.9602 9.99185L71.8328 10.2817C72.0234 10.3631 72.1538 10.4521 72.224 10.5487C72.2942 10.6454 72.3293 10.7649 72.3293 10.9073V19.7261C72.3293 19.9906 72.2842 20.194 72.1939 20.3364C72.1037 20.4788 71.9783 20.5754 71.8178 20.6263L71.1709 20.8247C70.9903 20.8959 70.8574 20.9874 70.7722 21.0993C70.6869 21.2112 70.6443 21.3587 70.6443 21.5418C70.6443 21.7554 70.707 21.9206 70.8324 22.0376C70.9577 22.1546 71.1207 22.2131 71.3213 22.2131H79.6261ZM91.4063 21.7706C90.4334 22.269 89.31 22.5182 88.0362 22.5182C86.632 22.5182 85.3984 22.2258 84.3352 21.6409C83.272 21.0561 82.442 20.2372 81.8452 19.1845C81.2485 18.1317 80.9501 16.9137 80.9501 15.5303C80.9501 14.0758 81.2384 12.8018 81.8152 11.7083C82.3919 10.6149 83.2269 9.76299 84.3201 9.15269C85.4134 8.54239 86.7273 8.23724 88.2619 8.23724C89.5658 8.23724 90.6892 8.49407 91.632 9.00774C92.5748 9.52141 93.2995 10.2182 93.806 11.098C94.3125 11.9779 94.5657 12.9569 94.5657 14.0351C94.5657 14.503 94.4404 14.8717 94.1896 15.1412L94.1298 15.2011C93.8827 15.4307 93.5415 15.5456 93.1064 15.5456H86.2288L86.2435 15.616C86.426 16.4536 86.7377 17.1244 87.1787 17.6282C87.9309 18.4877 88.9339 18.9175 90.1877 18.9175C90.9901 18.9175 91.6997 18.7344 92.3165 18.3682C92.9334 18.002 93.3471 17.4934 93.5577 16.8425C93.6781 16.7102 93.7859 16.6212 93.8812 16.5754C93.9765 16.5297 94.0592 16.5068 94.1294 16.5068C94.2297 16.5068 94.315 16.5475 94.3852 16.6288C94.4554 16.7102 94.4905 16.8475 94.4905 17.0408C94.4905 18.0376 94.2197 18.9505 93.6781 19.7795C93.1365 20.6085 92.3792 21.2722 91.4063 21.7706ZM86.0718 14.3225C86.0575 14.0884 86.0503 13.8451 86.0503 13.5926C86.0503 12.6365 86.1205 11.8838 86.2609 11.3345C86.4014 10.7852 86.5819 10.3962 86.8026 10.1673C87.0232 9.93845 87.2689 9.82401 87.5398 9.82401C87.8908 9.82401 88.2193 10.1241 88.5252 10.7242C88.8311 11.3243 88.9841 12.3212 88.9841 13.7147C88.9841 14.1419 88.7935 14.3555 88.4124 14.3555H86.0737L86.0718 14.3225ZM105.789 21.7706C104.816 22.269 103.693 22.5182 102.419 22.5182C101.015 22.5182 99.7813 22.2258 98.7181 21.6409C97.655 21.0561 96.825 20.2372 96.2282 19.1845C95.6314 18.1317 95.333 16.9137 95.333 15.5303C95.333 14.0758 95.6214 12.8018 96.1981 11.7083C96.7748 10.6149 97.6098 9.76299 98.7031 9.15269C99.7964 8.54239 101.11 8.23724 102.645 8.23724C103.949 8.23724 105.072 8.49407 106.015 9.00774C106.958 9.52141 107.682 10.2182 108.189 11.098C108.695 11.9779 108.949 12.9569 108.949 14.0351C108.949 14.503 108.823 14.8717 108.573 15.1412L108.513 15.2011C108.266 15.4307 107.924 15.5456 107.489 15.5456H100.612L100.626 15.616C100.809 16.4536 101.121 17.1244 101.562 17.6282C102.314 18.4877 103.317 18.9175 104.571 18.9175C105.373 18.9175 106.083 18.7344 106.699 18.3682C107.316 18.002 107.73 17.4934 107.941 16.8425C108.061 16.7102 108.169 16.6212 108.264 16.5754C108.359 16.5297 108.442 16.5068 108.512 16.5068C108.613 16.5068 108.698 16.5475 108.768 16.6288C108.838 16.7102 108.873 16.8475 108.873 17.0408C108.873 18.0376 108.603 18.9505 108.061 19.7795C107.519 20.6085 106.762 21.2722 105.789 21.7706ZM100.455 14.3225C100.44 14.0884 100.433 13.8451 100.433 13.5926C100.433 12.6365 100.503 11.8838 100.644 11.3345C100.784 10.7852 100.965 10.3962 101.186 10.1673C101.406 9.93845 101.652 9.82401 101.923 9.82401C102.274 9.82401 102.602 10.1241 102.908 10.7242C103.214 11.3243 103.367 12.3212 103.367 13.7147C103.367 14.1419 103.176 14.3555 102.795 14.3555H100.457L100.455 14.3225ZM118.615 22.0224C118.49 22.1495 118.307 22.2131 118.066 22.2131H110.543C110.323 22.2131 110.15 22.1521 110.024 22.03C109.899 21.9079 109.836 21.7401 109.836 21.5265C109.836 21.3637 109.874 21.229 109.949 21.1222C110.024 21.0154 110.127 20.9162 110.258 20.8247L110.604 20.6873C110.734 20.6263 110.824 20.5297 110.874 20.3974C110.925 20.2652 110.95 20.0465 110.95 19.7414V11.9906C110.95 11.7465 110.922 11.571 110.867 11.4642C110.812 11.3574 110.719 11.2735 110.589 11.2124L110.197 11.1667C110.057 11.0853 109.954 10.9988 109.889 10.9073C109.824 10.8158 109.791 10.6988 109.791 10.5564C109.791 10.3936 109.841 10.2487 109.942 10.1215C110.042 9.99439 110.212 9.88505 110.453 9.7935L114.726 8.55764C114.977 8.45593 115.187 8.38473 115.358 8.34404C115.528 8.30335 115.674 8.28301 115.794 8.28301C115.965 8.28301 116.093 8.34404 116.178 8.4661L116.205 8.51037C116.276 8.63795 116.324 8.84189 116.351 9.12217L116.465 11.493L116.491 11.4055C116.542 11.2403 116.598 11.0819 116.659 10.9302C117.025 10.0198 117.509 9.3434 118.111 8.90094C118.713 8.45847 119.37 8.23724 120.082 8.23724C120.945 8.23724 121.606 8.52713 122.068 9.10691C122.529 9.6867 122.76 10.5665 122.76 11.7465C122.76 12.9162 122.519 13.7757 122.038 14.325C121.556 14.8742 120.934 15.1489 120.172 15.1489C119.43 15.1489 118.881 14.9607 118.525 14.5843C118.169 14.208 117.981 13.674 117.961 12.9823L117.946 12.372C117.936 12.1381 117.89 11.955 117.81 11.8227C117.73 11.6905 117.6 11.6244 117.419 11.6244C117.238 11.6244 117.08 11.7185 116.945 11.9067C116.81 12.0948 116.707 12.3822 116.637 12.7687C116.566 13.1552 116.531 13.6486 116.531 14.2487V19.6193C116.531 19.9041 116.576 20.1304 116.667 20.2983C116.757 20.4661 116.897 20.5704 117.088 20.611L118.216 20.8399C118.427 20.8704 118.577 20.9493 118.668 21.0764C118.758 21.2035 118.803 21.3536 118.803 21.5265C118.803 21.7299 118.74 21.8952 118.615 22.0224ZM130.643 22.4877C132.138 22.4877 133.449 22.1775 134.578 21.557C135.706 20.9365 136.589 20.0948 137.226 19.0319C137.863 17.969 138.181 16.7662 138.181 15.4235C138.181 14.0096 137.875 12.7636 137.263 11.6854C136.651 10.6072 135.799 9.76299 134.706 9.15269C133.612 8.54239 132.334 8.23724 130.869 8.23724C129.395 8.23724 128.091 8.55256 126.957 9.1832C125.824 9.81384 124.936 10.6657 124.295 11.7388C123.653 12.8119 123.332 14.0198 123.332 15.3625C123.332 16.7662 123.638 18.002 124.249 19.07C124.861 20.1381 125.716 20.9747 126.815 21.5799C127.913 22.1851 129.189 22.4877 130.643 22.4877ZM130.877 20.489C131.173 20.8246 131.476 20.962 131.787 20.9009C132.098 20.8399 132.331 20.5958 132.486 20.1686C132.642 19.7414 132.707 19.1082 132.682 18.269C132.657 17.4299 132.524 16.3644 132.283 15.0726C132.043 13.7808 131.787 12.7382 131.516 11.9448C131.245 11.1514 130.962 10.5869 130.666 10.2512C130.37 9.91556 130.067 9.77824 129.756 9.83927C129.445 9.91047 129.214 10.1597 129.064 10.5869C128.913 11.0141 128.853 11.6447 128.883 12.4788C128.913 13.3129 129.044 14.3758 129.274 15.6676C129.515 16.9594 129.768 18.002 130.034 18.7954C130.3 19.5888 130.581 20.1533 130.877 20.489ZM150.112 22.5182C150.954 22.5182 151.646 22.3631 152.188 22.0529C152.729 21.7426 153.133 21.3739 153.399 20.9467C153.665 20.5195 153.798 20.1279 153.798 19.7719C153.798 19.6193 153.765 19.4922 153.7 19.3904C153.635 19.2887 153.547 19.2379 153.437 19.2379C153.386 19.2379 153.341 19.248 153.301 19.2684C153.261 19.2887 153.226 19.3192 153.196 19.3599C153.146 19.543 153.068 19.6702 152.963 19.7414C152.857 19.8126 152.744 19.8482 152.624 19.8482C152.454 19.8482 152.326 19.7897 152.24 19.6727C152.155 19.5557 152.113 19.4006 152.113 19.2074V12.4636C152.113 11.1209 151.659 10.0808 150.751 9.3434C149.843 8.60596 148.422 8.23724 146.486 8.23724C144.981 8.23724 143.725 8.42541 142.717 8.80176C141.709 9.17812 140.952 9.65873 140.445 10.2436C139.939 10.8285 139.685 11.426 139.685 12.0363C139.685 12.6873 139.874 13.1832 140.25 13.524C140.626 13.8647 141.17 14.0351 141.882 14.0351C142.755 14.0351 143.442 13.7986 143.943 13.3256C144.445 12.8526 144.695 12.2398 144.695 11.4871V10.3275C144.695 10.0427 144.783 9.82147 144.959 9.66381C145.134 9.50615 145.352 9.42732 145.613 9.42732C145.894 9.42732 146.117 9.53158 146.283 9.7401C146.448 9.94862 146.531 10.2309 146.531 10.5869L146.531 15.0344L146.451 15.017C146.209 14.9703 145.928 14.9436 145.61 14.9369L145.448 14.9353C143.291 14.9353 141.684 15.3014 140.626 16.0338C139.568 16.7662 139.039 17.7884 139.039 19.1006C139.039 20.0974 139.402 20.9162 140.129 21.557C140.856 22.1978 141.822 22.5182 143.025 22.5182C143.928 22.5182 144.771 22.3326 145.553 21.9613C146.14 21.6829 146.616 21.3172 146.983 20.8642L147.004 20.8378L147.026 20.9061C147.142 21.2358 147.354 21.5313 147.662 21.7925L147.757 21.8698C148.314 22.3021 149.099 22.5182 150.112 22.5182ZM144.929 19.6422C145.174 19.9728 145.498 20.1381 145.899 20.1381L145.985 20.1351C146.156 20.1232 146.322 20.0755 146.482 19.992L146.531 19.9643V16.0491L146.456 16.0262C146.285 15.9804 146.085 15.9575 145.854 15.9575C145.463 15.9575 145.149 16.1406 144.914 16.5068C144.678 16.873 144.56 17.4121 144.56 18.1241C144.56 18.8056 144.683 19.3116 144.929 19.6422ZM160.718 22.564C162.504 22.564 163.873 22.1521 164.826 21.3281C165.778 20.5042 166.255 19.3803 166.255 17.9562C166.255 17.0917 166.094 16.3339 165.773 15.6829C165.452 15.0319 164.891 14.4547 164.088 13.9512C163.286 13.4477 162.158 12.9721 160.703 12.5246C160.162 12.3517 159.743 12.1762 159.447 11.9982C159.151 11.8202 158.948 11.6295 158.838 11.4261C158.727 11.2226 158.672 11.0039 158.672 10.77C158.672 10.4241 158.798 10.1444 159.048 9.93082C159.299 9.71721 159.67 9.61041 160.162 9.61041C160.844 9.61041 161.488 9.83927 162.095 10.297C162.702 10.7547 163.371 11.5379 164.103 12.6466C164.294 12.8806 164.485 13.051 164.675 13.1578C164.866 13.2646 165.046 13.2976 165.217 13.2569C165.427 13.1959 165.558 13.0561 165.608 12.8374C165.658 12.6187 165.648 12.3059 165.578 11.899L165.187 9.09166C165.147 8.79668 165.071 8.58816 164.961 8.4661C164.851 8.34404 164.705 8.28301 164.525 8.28301C164.364 8.28301 164.164 8.33895 163.923 8.45084C163.682 8.56273 163.444 8.67716 163.208 8.79414C162.973 8.91111 162.794 8.9696 162.674 8.9696C162.564 8.9696 162.401 8.90857 162.185 8.78651C161.97 8.66445 161.666 8.54239 161.275 8.42033C160.884 8.29827 160.377 8.23724 159.755 8.23724C158.722 8.23724 157.792 8.42541 156.965 8.80176C156.137 9.17812 155.485 9.71467 155.009 10.4114C154.532 11.1082 154.294 11.9397 154.294 12.906C154.294 13.7604 154.472 14.5081 154.828 15.1489C155.184 15.7897 155.728 16.339 156.461 16.7967C157.193 17.2544 158.116 17.6257 159.229 17.9105C159.951 18.1037 160.505 18.2995 160.891 18.4979C161.277 18.6962 161.543 18.9124 161.689 19.1463C161.834 19.3803 161.907 19.6397 161.907 19.9245C161.907 20.3008 161.781 20.611 161.531 20.8552C161.28 21.0993 160.899 21.2213 160.387 21.2213C159.906 21.2213 159.447 21.1171 159.011 20.9086C158.574 20.7 158.126 20.3415 157.664 19.8329C157.203 19.3243 156.686 18.6276 156.115 17.7426C155.944 17.5087 155.751 17.3459 155.535 17.2544C155.32 17.1629 155.102 17.1679 154.881 17.2697C154.67 17.351 154.535 17.524 154.475 17.7884C154.414 18.0529 154.43 18.3784 154.52 18.7649L154.986 21.8011C155.056 22.1063 155.157 22.3097 155.287 22.4114C155.417 22.5131 155.558 22.564 155.708 22.564C155.879 22.564 156.087 22.5081 156.333 22.3962L157.07 22.0605C157.316 21.9486 157.514 21.8927 157.664 21.8927C157.815 21.8927 158.013 21.9486 158.258 22.0605C158.504 22.1724 158.825 22.2843 159.221 22.3962C159.618 22.5081 160.117 22.564 160.718 22.564ZM174.981 21.9918C174.319 22.3428 173.537 22.5182 172.634 22.5182C171.109 22.5182 169.963 22.147 169.196 21.4044C168.429 20.6619 168.045 19.4922 168.045 17.8952V10.9988C168.045 10.7852 168.025 10.6225 167.985 10.5106C167.945 10.3987 167.845 10.3072 167.684 10.236L166.977 10.0071C166.806 9.92573 166.696 9.82656 166.646 9.70958C166.596 9.59261 166.571 9.44766 166.571 9.27475C166.571 9.06114 166.646 8.88568 166.796 8.74836C166.947 8.61105 167.132 8.54239 167.353 8.54239H168.09C168.181 8.54239 168.276 8.50679 168.376 8.43559C168.476 8.36438 168.612 8.22198 168.782 8.00838L171.566 5.67398C171.766 5.42986 171.967 5.24423 172.167 5.11709C172.368 4.98994 172.569 4.92637 172.769 4.92637C173 4.92637 173.181 4.99757 173.311 5.13997L173.352 5.19045C173.455 5.33311 173.507 5.54006 173.507 5.8113L173.506 8.54239H176.651C176.872 8.54239 177.042 8.5907 177.162 8.68733C177.283 8.78396 177.343 8.934 177.343 9.13743C177.343 9.42223 177.218 9.66636 176.967 9.86979L176.911 9.91182C176.658 10.0872 176.275 10.1749 175.763 10.1749H173.506L173.507 17.1323C173.507 17.8952 173.634 18.4597 173.89 18.8259C174.146 19.1921 174.52 19.3752 175.011 19.3752C175.222 19.3752 175.417 19.3294 175.598 19.2379C175.778 19.1463 175.941 19.0268 176.087 18.8793C176.232 18.7318 176.37 18.5665 176.5 18.3835C176.631 18.2004 176.756 18.0173 176.877 17.8342C176.977 17.7935 177.065 17.8113 177.14 17.8876C177.215 17.9639 177.248 18.119 177.238 18.3529C177.167 19.1768 176.939 19.9016 176.553 20.5271C176.167 21.1527 175.643 21.6409 174.981 21.9918ZM184.835 22.5182C186.109 22.5182 187.232 22.269 188.205 21.7706C189.178 21.2722 189.936 20.6085 190.477 19.7795C191.019 18.9505 191.29 18.0376 191.29 17.0408C191.29 16.8475 191.255 16.7102 191.184 16.6288C191.114 16.5475 191.029 16.5068 190.929 16.5068C190.858 16.5068 190.776 16.5297 190.68 16.5754C190.585 16.6212 190.477 16.7102 190.357 16.8425C190.146 17.4934 189.732 18.002 189.116 18.3682C188.499 18.7344 187.789 18.9175 186.987 18.9175C185.733 18.9175 184.73 18.4877 183.978 17.6282C183.537 17.1244 183.225 16.4536 183.043 15.616L183.028 15.5456H189.905C190.341 15.5456 190.682 15.4307 190.929 15.2011L190.989 15.1412C191.239 14.8717 191.365 14.503 191.365 14.0351C191.365 12.9569 191.112 11.9779 190.605 11.098C190.099 10.2182 189.374 9.52141 188.431 9.00774C187.488 8.49407 186.365 8.23724 185.061 8.23724C183.526 8.23724 182.212 8.54239 181.119 9.15269C180.026 9.76299 179.191 10.6149 178.614 11.7083C178.038 12.8018 177.749 14.0758 177.749 15.5303C177.749 16.9137 178.048 18.1317 178.644 19.1845C179.241 20.2372 180.071 21.0561 181.134 21.6409C182.197 22.2258 183.431 22.5182 184.835 22.5182ZM182.849 13.5926C182.849 13.8451 182.857 14.0884 182.871 14.3225L182.873 14.3555H185.211C185.593 14.3555 185.783 14.1419 185.783 13.7147C185.783 12.3212 185.63 11.3243 185.324 10.7242C185.018 10.1241 184.69 9.82401 184.339 9.82401C184.068 9.82401 183.822 9.93845 183.602 10.1673C183.381 10.3962 183.2 10.7852 183.06 11.3345C182.92 11.8838 182.849 12.6365 182.849 13.5926ZM200.482 22.2131C200.723 22.2131 200.906 22.1495 201.031 22.0224C201.157 21.8952 201.219 21.7299 201.219 21.5265C201.219 21.3536 201.174 21.2035 201.084 21.0764C200.994 20.9493 200.843 20.8704 200.632 20.8399L199.504 20.611C199.314 20.5704 199.173 20.4661 199.083 20.2983C198.993 20.1304 198.947 19.9041 198.947 19.6193V14.2487C198.947 13.6486 198.983 13.1552 199.053 12.7687C199.123 12.3822 199.226 12.0948 199.361 11.9067C199.497 11.7185 199.655 11.6244 199.835 11.6244C200.016 11.6244 200.146 11.6905 200.226 11.8227C200.307 11.955 200.352 12.1381 200.362 12.372L200.377 12.9823C200.397 13.674 200.585 14.208 200.941 14.5843C201.297 14.9607 201.846 15.1489 202.588 15.1489C203.351 15.1489 203.972 14.8742 204.454 14.325C204.935 13.7757 205.176 12.9162 205.176 11.7465C205.176 10.5665 204.945 9.6867 204.484 9.10691C204.023 8.52713 203.361 8.23724 202.498 8.23724C201.786 8.23724 201.129 8.45847 200.527 8.90094C199.925 9.3434 199.441 10.0198 199.075 10.9302C199.014 11.0819 198.958 11.2403 198.908 11.4055L198.881 11.4934L198.767 9.12217C198.74 8.84189 198.692 8.63795 198.621 8.51037L198.594 8.4661C198.509 8.34404 198.381 8.28301 198.21 8.28301C198.09 8.28301 197.944 8.30335 197.774 8.34404C197.603 8.38473 197.393 8.45593 197.142 8.55764L192.869 9.7935C192.629 9.88505 192.458 9.99439 192.358 10.1215C192.257 10.2487 192.207 10.3936 192.207 10.5564C192.207 10.6988 192.24 10.8158 192.305 10.9073C192.37 10.9988 192.473 11.0853 192.614 11.1667L193.005 11.2124C193.135 11.2735 193.228 11.3574 193.283 11.4642C193.338 11.571 193.366 11.7465 193.366 11.9906V19.7414C193.366 20.0465 193.341 20.2652 193.291 20.3974C193.24 20.5297 193.15 20.6263 193.02 20.6873L192.674 20.8247C192.543 20.9162 192.441 21.0154 192.365 21.1222C192.29 21.229 192.252 21.3637 192.252 21.5265C192.252 21.7401 192.315 21.9079 192.441 22.03C192.566 22.1521 192.739 22.2131 192.96 22.2131H200.482ZM216.324 21.3281C215.372 22.1521 214.002 22.564 212.217 22.564C211.615 22.564 211.116 22.5081 210.72 22.3962C210.324 22.2843 210.003 22.1724 209.757 22.0605C209.512 21.9486 209.313 21.8927 209.163 21.8927C209.013 21.8927 208.814 21.9486 208.569 22.0605L207.831 22.3962C207.586 22.5081 207.378 22.564 207.207 22.564C207.057 22.564 206.916 22.5131 206.786 22.4114C206.655 22.3097 206.555 22.1063 206.485 21.8011L206.019 18.7649C205.928 18.3784 205.913 18.0529 205.973 17.7884C206.034 17.524 206.169 17.351 206.38 17.2697C206.6 17.1679 206.818 17.1629 207.034 17.2544C207.25 17.3459 207.443 17.5087 207.613 17.7426C208.185 18.6276 208.702 19.3243 209.163 19.8329C209.624 20.3415 210.073 20.7 210.509 20.9086C210.946 21.1171 211.405 21.2213 211.886 21.2213C212.398 21.2213 212.779 21.0993 213.03 20.8552C213.28 20.611 213.406 20.3008 213.406 19.9245C213.406 19.6397 213.333 19.3803 213.187 19.1463C213.042 18.9124 212.776 18.6962 212.39 18.4979C212.004 18.2995 211.45 18.1037 210.728 17.9105C209.614 17.6257 208.692 17.2544 207.959 16.7967C207.227 16.339 206.683 15.7897 206.327 15.1489C205.971 14.5081 205.793 13.7604 205.793 12.906C205.793 11.9397 206.031 11.1082 206.508 10.4114C206.984 9.71467 207.636 9.17812 208.463 8.80176C209.291 8.42541 210.221 8.23724 211.254 8.23724C211.876 8.23724 212.383 8.29827 212.774 8.42033C213.165 8.54239 213.468 8.66445 213.684 8.78651C213.9 8.90857 214.063 8.9696 214.173 8.9696C214.293 8.9696 214.471 8.91111 214.707 8.79414C214.943 8.67716 215.181 8.56273 215.422 8.45084C215.662 8.33895 215.863 8.28301 216.023 8.28301C216.204 8.28301 216.349 8.34404 216.46 8.4661C216.57 8.58816 216.645 8.79668 216.685 9.09166L217.077 11.899C217.147 12.3059 217.157 12.6187 217.107 12.8374C217.057 13.0561 216.926 13.1959 216.716 13.2569C216.545 13.2976 216.364 13.2646 216.174 13.1578C215.983 13.051 215.793 12.8806 215.602 12.6466C214.87 11.5379 214.201 10.7547 213.594 10.297C212.987 9.83927 212.342 9.61041 211.66 9.61041C211.169 9.61041 210.798 9.71721 210.547 9.93082C210.296 10.1444 210.171 10.4241 210.171 10.77C210.171 11.0039 210.226 11.2226 210.336 11.4261C210.447 11.6295 210.65 11.8202 210.946 11.9982C211.242 12.1762 211.66 12.3517 212.202 12.5246C213.656 12.9721 214.785 13.4477 215.587 13.9512C216.39 14.4547 216.951 15.0319 217.272 15.6829C217.593 16.3339 217.754 17.0917 217.754 17.9562C217.754 19.3803 217.277 20.5042 216.324 21.3281Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2823 4.10374C10.0382 0.862302 5.22953 0.395679 2.56282 3.06526C-0.105272 5.73345 0.361333 10.5423 3.59988 13.7851C4.46386 14.6491 5.45937 15.3096 6.51027 15.7831C6.85503 13.7796 7.84363 11.8535 9.34452 10.2723C8.84745 10.0951 8.33792 9.94552 7.80624 9.80013C4.6577 8.93612 3.09312 6.30946 2.72759 3.23003C3.02991 3.59359 3.30517 3.97493 3.57962 4.35514C4.11211 5.09283 4.64154 5.8263 5.35968 6.41746C6.47683 7.33735 7.70308 7.69244 9.04462 8.08092C9.09641 8.09592 9.14838 8.11097 9.20052 8.1261C9.83604 8.31026 10.3885 8.58303 10.8953 8.9015C12.2272 7.9281 13.7295 7.28009 15.2802 7.01286C14.8081 5.96192 14.1463 4.96775 13.2823 4.10374ZM7.79655 16.553C8.00285 14.5467 8.97483 12.5846 10.5325 11.0269C13.7766 7.78548 18.5852 7.31748 21.2519 9.98844C23.92 12.6566 23.4548 17.4655 20.2121 20.7083C18.6545 22.266 16.6925 23.238 14.6862 23.4457C14.419 23.472 14.1546 23.4859 13.8956 23.4859C12.1705 23.4859 10.6294 22.8808 9.49405 21.7454C8.187 20.4397 7.58333 18.5953 7.79655 16.553ZM12.5415 18.1993C13.6049 17.3879 14.7555 17.0667 16.0071 16.7247C19.1557 15.8607 20.7189 13.234 21.0858 10.1546C20.786 10.5161 20.5128 10.8949 20.2403 11.2725C19.7062 12.0128 19.1753 12.7488 18.4537 13.342C17.3331 14.2634 16.104 14.6191 14.7565 15.0091L14.7565 15.0091L14.6129 15.0507C11.5322 15.9451 10.0091 18.5496 9.65743 21.5806C9.96091 21.216 10.2389 20.8375 10.5155 20.4609L10.5155 20.4609C11.1158 19.6435 11.7092 18.8354 12.5415 18.1993Z"
          fill="#0E8784"
        />
      </svg>

      <ul className="footer__list">
        <li className="footer__list-item footer-space">HOME</li>
        <li className="footer__list-item footer-space">ABOUT US</li>
        <li className="footer__list-item">CREATE YOUR PLAN</li>
      </ul>
      <div className="footer__social">
        <div className="footer__social__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="#FEFCF7"
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
            />
          </svg>
        </div>

        <div className="footer__social__icon">
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.1002 2.55705C23.2172 2.94905 22.2682 3.21305 21.2722 3.33205C22.2892 2.72305 23.0702 1.75805 23.4372 0.608047C22.4862 1.17205 21.4322 1.58205 20.3102 1.80305C19.4132 0.846047 18.1322 0.248047 16.7162 0.248047C13.5372 0.248047 11.2012 3.21405 11.9192 6.29305C7.82822 6.08805 4.20022 4.12805 1.77122 1.14905C0.48122 3.36205 1.10222 6.25705 3.29422 7.72305C2.48822 7.69705 1.72822 7.47605 1.06522 7.10705C1.01122 9.38805 2.64622 11.522 5.01422 11.997C4.32122 12.185 3.56222 12.229 2.79022 12.081C3.41622 14.037 5.23422 15.46 7.39022 15.5C5.32022 17.123 2.71222 17.848 0.10022 17.54C2.27922 18.937 4.86822 19.752 7.64822 19.752C16.7902 19.752 21.9552 12.031 21.6432 5.10605C22.6052 4.41105 23.4402 3.54405 24.1002 2.55705Z"
              fill="#FEFCF7"
            />
          </svg>
        </div>

        <div className="footer__social__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="#FEFCF7"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
