let mobiles = [
  {
    id: 1,
    Brand: "iPhone",
    Model: "v14",
    Category: "E",
    price: 300,
    isApproved: true,
    isMobile: true,
  },
  {
    id: 2,
    Brand: "Samsung",
    Model: "s22",
    Category: "B",
    price: 400,
    isApproved: false,
    isMobile: true,
  },
  {
    id: 3,
    Brand: "Xiaomi",
    Model: "s29",
    Category: "C",
    price: 100,
    isApproved: false,
    isMobile: true,
  },
  {
    id: 4,
    Brand: "Redmi",
    Model: "s20 ultra",
    Category: "A",
    price: 200,
    isApproved: true,
    isMobile: true,
  },
];

let imageNew = [
  {
    data: {
      docs: {
        _data: {
          images: ["./images/iphone.jpg", "./images/redmi.jpg"],
        },
      },
    },
  },
  {
    data: {
      docs: {
        _data: {
          images: ["./images/infinix.jpg"],
        },
      },
    },
  },
  {
    data: {
      docs: {
        _data: {
          images: ["./images/samsung.jpg", "./images/xiaomi.jpg"],
        },
      },
    },
  },
];

let img = "";
mobiles.forEach((item, index) => {
  imageNew.forEach((value) => {
    value.data.docs._data.images.filter((val) => {
      if (val.toLowerCase().includes(item.Brand.toLowerCase())) {
        img = val;
      }
      console.log("val" + img);
    });
  });

  mobiles[index].img = img;
});
console.log("IMAGE ARRAY", mobiles);
