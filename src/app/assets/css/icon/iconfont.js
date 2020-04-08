;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-biji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M32 776V992h214.4l568-568-214.4-214.4L32 776zM777.6 32L672 139.2 884.8 352l105.6-105.6L777.6 32z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tat" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.6 998.4c-264 0-480-216-480-480s216-480 480-480 480 216 480 480c0 265.6-216 480-480 480z m0-852.8C307.2 145.6 139.2 313.6 139.2 518.4c0 206.4 168 372.8 372.8 372.8s372.8-168 372.8-372.8c1.6-204.8-166.4-372.8-371.2-372.8z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bgbd" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M28.8 267.2c0-49.6 32-67.2 73.6-36.8l312 236.8c40 30.4 40 80 0 110.4L102.4 814.4c-40 30.4-73.6 14.4-73.6-36.8V267.2zM988.8 267.2c0-49.6-32-67.2-73.6-36.8L604.8 467.2c-40 30.4-40 80 0 110.4l312 236.8c40 30.4 73.6 14.4 73.6-36.8V267.2z" fill="" ></path>' +
    '' +
    '<path d="M508.8 809.6c-12.8 0-22.4-9.6-22.4-22.4v-528c0-12.8 9.6-22.4 22.4-22.4 12.8 0 22.4 9.6 22.4 22.4v528c0 12.8-9.6 22.4-22.4 22.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bgbj" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M784 316.8L620.8 155.2l44.8-44.8c25.6-25.6 65.6-25.6 91.2 0l72 72c25.6 25.6 25.6 65.6 0 91.2L784 316.8zM312 803.2l-163.2-160 438.4-452.8 164.8 160-440 452.8zM94.4 913.6c-35.2 9.6-57.6-12.8-49.6-49.6l32-124.8c9.6-35.2 38.4-43.2 64-17.6l97.6 96c25.6 25.6 17.6 54.4-17.6 64l-126.4 32z" fill="" ></path>' +
    '' +
    '<path d="M950.4 737.6H643.2c-20.8 0-38.4-14.4-38.4-32s17.6-32 38.4-32h307.2c20.8 0 38.4 14.4 38.4 32s-17.6 32-38.4 32zM449.6 865.6h504c19.2 0 36.8 14.4 36.8 32s-16 32-36.8 32H449.6c-19.2 0-35.2-14.4-35.2-32s14.4-32 35.2-32z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bgfz" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.2 908.8c0 52.8-43.2 97.6-97.6 97.6H124.8c-52.8 0-97.6-43.2-97.6-97.6V438.4c0-52.8 43.2-97.6 97.6-97.6h470.4c52.8 0 97.6 43.2 97.6 97.6v470.4z" fill="" ></path>' +
    '' +
    '<path d="M257.6 46.4c-27.2 0-48 22.4-48 48v28.8c0 27.2 22.4 48 48 48h555.2c27.2 0 48 22.4 48 48v555.2c0 27.2 22.4 48 48 48h28.8c27.2 0 48-22.4 48-48V94.4c0-27.2-22.4-48-48-48H257.6z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bacu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M552 352c22.4 0 40-17.6 40-40v-80c0-22.4-17.6-40-40-40S512 209.6 512 232v80c0 22.4 17.6 40 40 40z" fill="" ></path>' +
    '' +
    '<path d="M947.2 312l-273.6-272c-4.8-4.8-9.6-8-16-8H192C126.4 32 72 86.4 72 152v720c0 67.2 54.4 120 120 120h640c65.6 0 120-52.8 120-120V326.4c0-6.4-1.6-11.2-4.8-14.4zM192 352V192c0-22.4 17.6-40 40-40h400c22.4 0 40 17.6 40 40v160c0 22.4-17.6 40-40 40h-400c-22.4 0-40-17.6-40-40z m640 480c0 22.4-17.6 40-40 40h-560c-22.4 0-40-17.6-40-40V512c0-22.4 17.6-40 40-40h560c22.4 0 40 17.6 40 40v320z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M400 336V123.2L27.2 496 400 868.8V651.2c267.2 0 452.8 84.8 587.2 272C932.8 656 772.8 388.8 400 336" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cada" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M84.8 244.8h852.8c28.8 0 52.8-24 52.8-52.8s-24-52.8-52.8-52.8H84.8C56 139.2 32 163.2 32 192s24 52.8 52.8 52.8zM939.2 459.2H84.8C56 459.2 32 483.2 32 512s24 52.8 52.8 52.8h852.8c28.8 0 52.8-24 52.8-52.8s-22.4-52.8-51.2-52.8zM939.2 779.2H84.8C56 779.2 32 803.2 32 832s24 52.8 52.8 52.8h852.8c28.8 0 52.8-24 52.8-52.8s-22.4-52.8-51.2-52.8z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chxu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M971.2 873.6l-156.8-156.8c120-168 104-403.2-46.4-555.2C600-4.8 326.4-4.8 158.4 163.2s-168 441.6 0 609.6c84.8 84.8 195.2 126.4 305.6 126.4 88 0 176-27.2 249.6-80l156.8 156.8c14.4 14.4 32 20.8 51.2 20.8s36.8-6.4 51.2-20.8c27.2-28.8 27.2-73.6-1.6-102.4z m-752-161.6c-134.4-134.4-134.4-353.6 0-488 67.2-67.2 155.2-100.8 243.2-100.8s176 33.6 243.2 100.8c134.4 134.4 134.4 353.6 0 488s-352 134.4-486.4 0z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dayi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M177.6 804.8H56c-17.6 0-24-6.4-24-24V548.8c0-62.4 46.4-110.4 108.8-112h38.4v-12.8V128c0-40 22.4-62.4 60.8-62.4h377.6c40 0 73.6 14.4 102.4 41.6l81.6 81.6c27.2 28.8 41.6 62.4 41.6 100.8v144H880c52.8 1.6 96 35.2 108.8 84.8 1.6 9.6 3.2 19.2 3.2 30.4v228.8c0 17.6-6.4 25.6-24 25.6h-123.2v88c0 12.8-3.2 25.6-11.2 36.8-11.2 16-27.2 22.4-46.4 22.4H241.6c-38.4 0-60.8-22.4-60.8-60.8v-83.2c-3.2 1.6-3.2 0-3.2-1.6zM768 288H678.4c-19.2 0-35.2-6.4-48-22.4-8-11.2-11.2-24-11.2-36.8V142.4h-368v368h515.2c1.6-75.2 1.6-148.8 1.6-222.4z m0 444.8H252.8V880H768v-147.2z m112-222.4c-20.8 0-36.8 17.6-36.8 36.8 0 19.2 16 36.8 36.8 36.8 20.8 0 36.8-16 36.8-36.8 0-20.8-16-36.8-36.8-36.8z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dash" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M507.2 990.4c-264 0-480-216-480-480s216-480 480-480 480 216 480 480-216 480-480 480z m0-891.2C280 99.2 94.4 283.2 94.4 510.4s184 411.2 411.2 411.2 411.2-184 411.2-411.2S732.8 99.2 507.2 99.2z" fill="" ></path>' +
    '' +
    '<path d="M296 510.4m-68.8 0a68.8 68.8 0 1 0 137.6 0 68.8 68.8 0 1 0-137.6 0Z" fill="" ></path>' +
    '' +
    '<path d="M507.2 510.4m-68.8 0a68.8 68.8 0 1 0 137.6 0 68.8 68.8 0 1 0-137.6 0Z" fill="" ></path>' +
    '' +
    '<path d="M716.8 510.4m-68.8 0a68.8 68.8 0 1 0 137.6 0 68.8 68.8 0 1 0-137.6 0Z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-erwm" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M32 467.2h435.2V32H32v435.2zM120 120h260.8v260.8H120V120zM556.8 32v435.2H992V32H556.8z m347.2 347.2H643.2V120h260.8v259.2zM32 992h435.2V556.8H32V992z m88-348.8h260.8v260.8H120V643.2zM992 817.6V556.8h-86.4v86.4h-88v-84.8H556.8V992h86.4V731.2h88v86.4H992zM731.2 992h86.4v-86.4h-86.4V992z m174.4 0H992v-86.4h-86.4V992zM206.4 292.8h86.4v-86.4h-86.4v86.4z m611.2-86.4h-86.4v86.4h86.4v-86.4zM206.4 817.6h86.4v-86.4h-86.4v86.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fabu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M838.4 796.8L448 676.8l390.4-449.6-510.4 449.6-299.2-120 960-510.4-150.4 750.4zM448 977.6V766.4l120 60.8-120 150.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gedu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M30.4 512c0 67.2 54.4 121.6 121.6 121.6s121.6-54.4 121.6-121.6-54.4-121.6-121.6-121.6-121.6 54.4-121.6 121.6zM390.4 512c0 67.2 54.4 121.6 121.6 121.6 67.2 0 121.6-54.4 121.6-121.6s-54.4-121.6-121.6-121.6c-67.2 0-121.6 54.4-121.6 121.6zM748.8 512c0 67.2 54.4 121.6 121.6 121.6S992 579.2 992 512s-54.4-121.6-121.6-121.6-121.6 54.4-121.6 121.6z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gubo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M32 353.6v320h212.8L512 939.2V86.4L244.8 353.6H32z m720 160c0-96-52.8-176-132.8-212.8v427.2c80-38.4 132.8-118.4 132.8-214.4M619.2 43.2v112c155.2 48 267.2 187.2 267.2 356.8 0 171.2-112 308.8-267.2 356.8v112C832 934.4 992 742.4 992 513.6S832 91.2 619.2 43.2" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M649.6 318.4L552 416c11.2 4.8 20.8 11.2 30.4 19.2 19.2 19.2 28.8 44.8 28.8 70.4 0 25.6-9.6 49.6-28.8 70.4l-36.8 36.8-168 166.4-49.6 49.6c-19.2 19.2-44.8 28.8-70.4 28.8-25.6 0-51.2-9.6-70.4-28.8-17.6-20.8-27.2-44.8-27.2-70.4 0-25.6 9.6-49.6 28.8-70.4l38.4-38.4c-38.4-73.6-28.8-134.4-16-172.8l-116.8 116.8c-44.8 44.8-68.8 105.6-67.2 164.8 0 59.2 22.4 118.4 67.2 164.8 44.8 44.8 105.6 68.8 164.8 68.8 59.2 0 118.4-22.4 163.2-67.2L675.2 672c44.8-44.8 68.8-105.6 68.8-164.8 0-59.2-22.4-118.4-68.8-164.8-8-9.6-17.6-17.6-25.6-24z" fill="" ></path>' +
    '' +
    '<path d="M918.4 99.2c-44.8-44.8-105.6-68.8-164.8-68.8-59.2 0-118.4 22.4-163.2 67.2L336 352c-44.8 44.8-68.8 105.6-68.8 164.8 0 59.2 22.4 118.4 68.8 164.8 8 8 17.6 16 27.2 22.4l97.6-97.6c-11.2-4.8-20.8-11.2-30.4-19.2-19.2-19.2-28.8-44.8-28.8-70.4 0-25.6 9.6-51.2 28.8-70.4l200-200 6.4-8 46.4-46.4c19.2-19.2 44.8-28.8 70.4-28.8 25.6 0 51.2 9.6 70.4 28.8 19.2 19.2 28.8 44.8 28.8 70.4 0 25.6-9.6 49.6-28.8 70.4l-38.4 38.4c38.4 73.6 28.8 134.4 16 172.8l116.8-116.8c44.8-44.8 67.2-105.6 67.2-164.8 0-59.2-22.4-118.4-67.2-163.2z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jizh" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.6 209.6H692.8V89.6c0-33.6-27.2-59.2-60.8-59.2h-240c-33.6 0-59.2 27.2-59.2 59.2v120H153.6c-65.6 0-120 54.4-120 120v478.4c0 65.6 54.4 120 120 120h720c65.6 0 120-54.4 120-120V329.6c0-65.6-54.4-120-120-120m-480-120h240v120h-240V89.6m360 539.2H572.8v179.2h-120V628.8H273.6v-120h179.2V329.6h120v179.2H752v120h1.6m0 0" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M627.2 449.6c9.6-30.4 16-64 16-96C641.6 184 505.6 48 337.6 48S32 184 32 353.6c0 168 136 305.6 305.6 305.6 33.6 0 65.6-4.8 96-16l68.8 68.8h147.2v147.2h147.2V1008H992V814.4L627.2 449.6z m-353.6-59.2c-57.6 0-102.4-46.4-102.4-102.4 0-57.6 46.4-102.4 102.4-102.4 57.6 0 102.4 46.4 102.4 102.4 0 56-44.8 102.4-102.4 102.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nv" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M25.6 992s0-137.6 104-172.8c104-36.8 225.6-62.4 256-108.8 0 0-110.4 12.8-148.8-27.2-38.4-40-24-81.6-17.6-102.4 0 0-22.4-8-24-28.8-1.6-20.8 57.6-102.4 65.6-156.8 8-54.4 35.2-225.6 94.4-296s120-65.6 144-65.6 139.2 8 179.2 88c56 113.6 75.2 297.6 108.8 342.4 33.6 44.8 56 102.4 11.2 107.2 0 0 38.4 105.6-32 132.8-52.8 20.8-123.2 4.8-123.2 4.8s-4.8 40 203.2 96c80 22.4 140.8 81.6 139.2 187.2h-960z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M784 744c-126.4-46.4-166.4-84.8-166.4-168 0-49.6 38.4-33.6 56-124.8 6.4-38.4 41.6 0 48-86.4 0-33.6-19.2-43.2-19.2-43.2s9.6-51.2 12.8-89.6C720 182.4 686.4 57.6 512 57.6c-174.4 0-208 126.4-203.2 174.4 3.2 38.4 12.8 89.6 12.8 89.6s-17.6 8-17.6 43.2c6.4 86.4 40 49.6 48 86.4 17.6 91.2 56 75.2 56 124.8 0 83.2-40 121.6-166.4 168-126.4 46.4-208 92.8-208 124.8V976h960v-107.2c-1.6-32-83.2-78.4-209.6-124.8z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pifu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M289.6 104h81.6c6.4 3.2 14.4 4.8 20.8 9.6 8 4.8 12.8 12.8 19.2 19.2 8 9.6 22.4 19.2 35.2 24 14.4 6.4 30.4 9.6 48 12.8 6.4 0 11.2 0 17.6 1.6 8 1.6 17.6 0 24-1.6 33.6-6.4 51.2-11.2 72-28.8 8-6.4 12.8-17.6 22.4-24 4.8-3.2 9.6-4.8 16-8 4.8-1.6 8 0 11.2-3.2h24c22.4 0 57.6-3.2 72 4.8 11.2 6.4 19.2 14.4 27.2 22.4 11.2 11.2 24 22.4 35.2 33.6 38.4 35.2 75.2 72 113.6 107.2 11.2 12.8 25.6 22.4 36.8 35.2 9.6 9.6 20.8 17.6 25.6 32v6.4c3.2 16-4.8 27.2-12.8 36.8-32 30.4-64 59.2-94.4 89.6-11.2 12.8-25.6 30.4-46.4 33.6-27.2 4.8-43.2-11.2-56-24-4.8-4.8-8-9.6-12.8-12.8H768v412.8c-1.6 11.2-9.6 20.8-16 27.2-19.2 14.4-52.8 11.2-86.4 11.2H342.4c-24 0-48 1.6-62.4-6.4-8-4.8-16-14.4-19.2-22.4-3.2-9.6-3.2-24-3.2-38.4V473.6H256c-14.4 11.2-24 27.2-43.2 33.6-16 6.4-35.2 0-44.8-6.4-6.4-4.8-12.8-11.2-17.6-16-14.4-12.8-28.8-27.2-43.2-40-6.4-6.4-12.8-12.8-20.8-19.2-8-6.4-16-14.4-24-22.4-9.6-9.6-19.2-16-25.6-28.8-1.6-4.8-6.4-14.4-4.8-24 4.8-20.8 17.6-32 30.4-43.2 8-6.4 16-14.4 24-22.4l134.4-128c8-8 16-16 24-22.4 12.8-14.4 22.4-28.8 44.8-30.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pllr" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M110.4 432H24V136c0-54.4 44.8-99.2 99.2-99.2h288v86.4h-288c-6.4-1.6-12.8 4.8-12.8 12.8V432zM984 432h-86.4V136c0-8-6.4-14.4-14.4-14.4h-288V35.2h288c54.4 0 99.2 44.8 99.2 99.2V432zM411.2 995.2h-288c-54.4 0-99.2-44.8-99.2-99.2V600h86.4V896c0 8 6.4 14.4 14.4 14.4h288v84.8zM884.8 995.2h-288v-86.4h288c8 0 14.4-6.4 14.4-14.4V600h86.4V896c-1.6 54.4-46.4 99.2-100.8 99.2zM747.2 681.6c0 43.2-35.2 76.8-76.8 76.8H337.6c-43.2 0-76.8-35.2-76.8-76.8V350.4c0-43.2 35.2-76.8 76.8-76.8h331.2c43.2 0 76.8 35.2 76.8 76.8v331.2z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M977.6 833.6L654.4 512 976 190.4c19.2-19.2 19.2-51.2 0-72l-72-72c-19.2-19.2-51.2-19.2-72 0L512 369.6 190.4 46.4c-19.2-19.2-51.2-19.2-72 0L46.4 118.4c-19.2 19.2-19.2 51.2 0 72L369.6 512 46.4 833.6c-19.2 19.2-19.2 51.2 0 72l72 72c19.2 19.2 51.2 19.2 72 0L512 654.4 833.6 976c19.2 19.2 51.2 19.2 72 0l72-72c19.2-17.6 19.2-49.6 0-70.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qubu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M443.2 443.2c0 9.6-6.4 16-16 16H48c-8 0-16-6.4-16-16V64c0-8 8-16 16-16h379.2c9.6 0 16 8 16 16v379.2zM992 443.2c0 9.6-8 16-16 16H596.8c-8 0-16-6.4-16-16V64c0-8 8-16 16-16H976c8 0 16 8 16 16v379.2z" fill="" ></path>' +
    '' +
    '<path d="M443.2 992c0 8-6.4 16-16 16H48c-8 0-16-8-16-16V612.8c0-8 8-16 16-16h379.2c9.6 0 16 8 16 16V992zM992 992c0 8-8 16-16 16H596.8c-8 0-16-8-16-16V612.8c0-8 8-16 16-16H976c8 0 16 8 16 16V992z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shhe" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M921.6 742.4H688c-20.8-25.6-35.2-52.8-38.4-84.8-9.6-129.6 129.6-190.4 129.6-348.8C779.2 176 676.8 67.2 512 67.2c-164.8 0-267.2 108.8-267.2 243.2 0 158.4 139.2 219.2 129.6 348.8-3.2 32-17.6 59.2-38.4 84.8H102.4c-38.4 0-70.4 32-70.4 70.4v142.4h960v-142.4c0-40-32-72-70.4-72z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-supi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M868.8 411.2h-62.4v-110.4c0-148.8-121.6-270.4-270.4-270.4h-46.4c-148.8 0-270.4 121.6-270.4 270.4v110.4H158.4c-40 0-73.6 33.6-73.6 73.6v433.6c0 40 33.6 73.6 73.6 73.6h710.4c40 0 73.6-33.6 73.6-73.6V484.8c0-40-33.6-73.6-73.6-73.6z m-545.6-110.4c0-92.8 75.2-168 168-168h46.4c92.8 0 168 75.2 168 168v110.4H323.2v-110.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M393.6 30.4l-360 480h360l-240 480 840-600h-480L873.6 30.4h-480z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tixi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 990.4c54.4 0 100.8-28.8 126.4-72H385.6c25.6 43.2 72 72 126.4 72zM864 764.8c-78.4-108.8-131.2-219.2-131.2-400 0-19.2 0-40 1.6-57.6 0-100.8-67.2-187.2-160-214.4-1.6-33.6-28.8-60.8-64-60.8-33.6 0-62.4 27.2-64 60.8-92.8 27.2-160 113.6-160 214.4 1.6 19.2 1.6 38.4 1.6 57.6 0 180.8-52.8 289.6-131.2 400-6.4 11.2-12.8 25.6-12.8 40 0 35.2 28.8 62.4 62.4 62.4H816c35.2 0 62.4-28.8 62.4-62.4 0-14.4-4.8-28.8-14.4-40z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuch" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M500.8 849.6H174.4V172.8h328c38.4 0 70.4-32 70.4-70.4S542.4 32 504 32h-400C65.6 32 33.6 64 33.6 102.4v819.2c0 38.4 32 70.4 70.4 70.4h396.8c38.4 0 70.4-32 70.4-70.4 0-40-30.4-72-70.4-72z" fill="" ></path>' +
    '' +
    '<path d="M974.4 464L728 212.8c-25.6-25.6-46.4-17.6-46.4 19.2v209.6H420.8c-38.4 0-70.4 32-70.4 70.4 0 38.4 32 70.4 70.4 70.4h260.8v209.6c0 36.8 20.8 44.8 46.4 19.2L972.8 560c27.2-27.2 27.2-70.4 1.6-96z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiqi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M699.2 998.4H332.8v-46.4h17.6c57.6 3.2 83.2-30.4 80-102.4V569.6c3.2-33.6-12.8-54.4-51.2-62.4l-46.4-17.6v-33.6l251.2-86.4H608v491.2c0 57.6 30.4 88 91.2 91.2v46.4zM630.4 136c-8 60.8-46.4 96-113.6 102.4-72-3.2-112-38.4-120-102.4 8-57.6 48-89.6 120-97.6 72 3.2 110.4 36.8 113.6 97.6z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yiqi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M945.6 94.4H78.4C52.8 94.4 32 115.2 32 140.8v619.2c0 25.6 20.8 46.4 46.4 46.4h294.4v76.8l-62.4 62.4v16h403.2v-16l-62.4-62.4v-76.8h294.4c25.6 0 46.4-20.8 46.4-46.4V140.8c0-25.6-20.8-46.4-46.4-46.4z m-16 588.8H94.4V156.8h836.8v526.4h-1.6z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yula" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 185.6c-217.6 0-406.4 136-480 328 73.6 192 262.4 328 480 328 217.6 0 406.4-136 480-328-73.6-192-262.4-328-480-328m0 545.6c-121.6 0-217.6-96-217.6-217.6s96-217.6 217.6-217.6 217.6 96 217.6 217.6-96 217.6-217.6 217.6m0-348.8c-73.6 0-131.2 56-131.2 131.2 0 73.6 56 131.2 131.2 131.2 73.6 0 131.2-56 131.2-131.2 0-75.2-57.6-131.2-131.2-131.2" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zdxm" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M494.4 75.2c9.6-17.6 24-17.6 33.6 0L649.6 320c9.6 17.6 33.6 35.2 52.8 38.4l270.4 40c20.8 3.2 24 17.6 9.6 32L787.2 620.8c-14.4 14.4-24 41.6-20.8 62.4l46.4 270.4c3.2 20.8-8 28.8-27.2 19.2l-241.6-128c-17.6-9.6-48-9.6-65.6 0l-241.6 128c-17.6 9.6-30.4 1.6-27.2-19.2L256 683.2c3.2-20.8-6.4-48-20.8-62.4L40 430.4c-14.4-14.4-9.6-28.8 9.6-32L320 358.4c20.8-3.2 44.8-20.8 52.8-38.4l121.6-244.8z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuyi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 638.4c86.4 0 152-65.6 152-152v-304C664 97.6 598.4 32 512 32s-152 65.6-152 152v302.4c0 86.4 65.6 152 152 152m267.2-152c0 152-126.4 257.6-267.2 257.6-140.8 0-267.2-105.6-267.2-257.6H158.4c0 171.2 136 313.6 302.4 339.2V992h100.8V824c166.4-25.6 304-166.4 304-339.2l-86.4 1.6z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)