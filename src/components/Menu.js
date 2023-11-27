import * as React from 'react';
import {
  Dimensions,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-paper';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Carousel from 'react-native-reanimated-carousel';

// data for burgers
const Data1 = [
  {
    id: 1,
    title: 'Delicous Burger',
    desc: 'Beef Burger',
    img: require('../assets/Burger/Beef-burger.jpg'),
    price: 550,
  },
  {
    id: 2,
    title: 'Zampa Burger',
    desc: 'Chiiken Burger',
    img: require('../assets/Burger/chicken-burger.jpeg'),
    price: 550,
  },
  {
    id: 3,
    title: 'Cruchy Burger',
    desc: 'Zinger Burger',
    img: require('../assets/Burger/Zinger_Burger.png'),
    price: 550,
  },
];

// data for bar b Q
const Data2 = [
  {
    id: 1,
    title: 'BAR B Q',
    desc: 'Chiken Wings',
    img: require('../assets/barbq/ChickenWings.jpg'),
    price: 650,
  },
  {
    id: 2,
    title: 'BAR B Q',
    desc: 'chiken-tikka',
    img: require('../assets/barbq/chiken-tikka.jpg'),
    price: 400,
  },
  {
    id: 3,
    title: 'BAR B Q',
    desc: 'Grilled-Chicken-Skewers',
    img: require('../assets/barbq/Grilled-Chicken-Skewers.jpg'),
    price: 700,
  },
  {
    id: 4,
    title: 'BarBQ',
    desc: 'Back Ribs',
    img: require('../assets/barbq/back-ribs.jpg'),
    price: 1000,
  },
];

// DATA FOR CHINESE
const Data3 = [
  {
    id: 1,
    title: 'Chinese',
    desc: 'Chiken chowmin',
    img: require('../assets/chinese/chowmin.jpg'),
    price: 650,
  },
  {
    id: 2,
    title: 'Chinese',
    desc: 'General-tsos-chicken',
    img: require('../assets/chinese/general-tsos-chicken.jpg'),
    price: 400,
  },
  {
    id: 3,
    title: 'Chines',
    desc: 'Masala-Macaroni',
    img: require('../assets/chinese/Masala-Macaroni.jpg'),
    price: 700,
  },
  {
    id: 4,
    title: 'Chinese',
    desc: 'One-pot-spaghetti',
    img: require('../assets/chinese/one-pot-spaghetti.jpg'),
    price: 1000,
  },
];

// DATA FOR RICE
const Data4 = [
  {
    id: 1,
    title: 'Beef Biryani',
    desc: 'Hot & Spicy Beef Biryani',
    img: require('../assets/Rice/beef.biryani.jpg'),
    price: 200,
  },
  {
    id: 2,
    title: 'Beef Pulao',
    desc: 'White Beef Pulao',
    img: require('../assets/Rice/beef.white-pulao.jpeg'),
    price: 400,
  },
  {
    id: 3,
    title: 'Chiken Biryani',
    desc: 'Masala Chiken Biryani',
    img: require('../assets/Rice/chiken-biryani.jpeg'),
    price: 700,
  },
  {
    id: 4,
    title: 'Chiken Biryani',
    desc: 'Chicken-Hyderabadi-Biryani',
    img: require('../assets/Rice/hyderabadi-biryani-chicken.jpg'),
    price: 1000,
  },
  {
    id: 5,
    title: 'Chiken Pulao',
    desc: 'Chiken White Pulao',
    img: require('../assets/Rice/chiken-white-pulao.jpeg'),
    price: 1000,
  },
];

// DATA FOR SALAD
const Data5 = [
  {
    id: 1,
    title: 'Fruit Salad',
    desc: 'Special Fruit Salad',
    img: require('../assets/salad/fruit-salad.jpeg'),
    price: 650,
  },
  {
    id: 2,
    title: 'Green Salad',
    desc: 'Fresh Green Salad',
    img: require('../assets/salad/green-salad.jpg'),
    price: 400,
  },
  {
    id: 3,
    title: 'Russian Salad',
    desc: 'Delicious Russian Salad',
    img: require('../assets/salad/russian-salad.jpeg'),
    price: 700,
  },
  {
    id: 4,
    title: 'Taco Salad',
    desc: 'Special Taco Salad',
    img: require('../assets/salad/taco-salad.jpg'),
    price: 1000,
  },
];

// DATA FOR SALAD
const Data6 = [
    {
      id: 1,
      title: 'Custard',
      desc: 'Special Custard',
      img: require('../assets/deserts/custard.jpeg'),
      price: 650
    },
    {
      id: 2,
      title: 'Gajar Ka Halwa',
      desc: 'Fresh Gajar Ka Halwa',
      img: require('../assets/deserts/gajar-halwa.jpeg'),
      price: 400
    },
    {
      id: 3,
      title: 'Kheer',
      desc: 'Delicious Kheer',
      img: require('../assets/deserts/kheer.jpeg'),
      price: 700
    },
    {
      id: 4,
      title: 'Lab-E-Shirin',
      desc: 'Special Lab-E-Shirin',
      img: require('../assets/deserts/lab-e-shirin.jpeg'),
      price: 1000
    }
  ];
  



function MenuSlider() {
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:20}}>WELCOME</Text>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={[
            {slide: require('../assets/food1.jpg')},
            {slide: require('../assets/food2.jpg')},
            {slide: require('../assets/food3.jpg')},
            {slide: require('../assets/food4.jpg')},
          ]}
          scrollAnimationDuration={1000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
              }}>
              <Image
                source={item.slide}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          )}
        />

        {/* LIST FOR BURGERS */}
        <View style={{width: '100%', height: 270, gap: 5}}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 25,
              marginTop: 15,
            }}>
            Special Burgers Deals!
          </Text>
          <FlatList
            style={{}}
            data={Data1}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <View
                  style={{
                    gap: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{objectFit: 'contain', width: 230, height: 150}}
                    source={item.img}
                  />
                  <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  <Text style={{fontWeight: 'bold'}}>{item.desc}</Text>
                  <Text style={{color: 'green', fontWeight: 'bold'}}>
                    RS:{item.price}
                  </Text>
                </View>
              </>
            )}
          />
        </View>

        {/* list for BAR B Q */}
        <View style={{width: '100%', height: 270, gap: 5, marginTop: 5}}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 25,
              marginTop: 15,
            }}>
            BAR B Q
          </Text>
          <FlatList
            style={{}}
            data={Data2}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <View
                  style={{
                    gap: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{objectFit: 'contain', width: 230, height: 150}}
                    source={item.img}
                  />
                  <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  <Text style={{fontWeight: 'bold'}}>{item.desc}</Text>
                  <Text style={{color: 'green', fontWeight: 'bold'}}>
                    RS:{item.price}
                  </Text>
                </View>
              </>
            )}
          />
        </View>

        {/* list for chinese */}
        <View style={{width: '100%', height: 270, gap: 5, marginTop: 5}}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 25,
              marginTop: 15,
            }}>
            CHINESE
          </Text>
          <FlatList
            style={{}}
            data={Data3}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <View
                  style={{
                    gap: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{objectFit: 'contain', width: 210, height: 150}}
                    source={item.img}
                  />
                  <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  <Text style={{fontWeight: 'bold'}}>{item.desc}</Text>
                  <Text style={{color: 'green', fontWeight: 'bold'}}>
                    RS:{item.price}
                  </Text>
                </View>
              </>
            )}
          />
        </View>

        {/* list for RICE */}
        <View style={{width: '100%', height: 270, gap: 5, marginTop: 5}}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 25,
              marginTop: 15,
            }}>
            RICE
          </Text>
          <FlatList
            style={{}}
            data={Data4}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <View
                  style={{
                    gap: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{objectFit: 'contain', width: 180, height: 150}}
                    source={item.img}
                  />
                  <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  <Text style={{fontWeight: 'bold'}}>{item.desc}</Text>
                  <Text style={{color: 'green', fontWeight: 'bold'}}>
                    RS:{item.price}
                  </Text>
                </View>
              </>
            )}
          />
        </View>

        {/* list for SALAD */}
        <View style={{width: '100%', height: 270, gap: 5, marginTop: 5}}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 25,
              marginTop: 15,
            }}>
            SALAD
          </Text>
          <FlatList
            style={{}}
            data={Data5}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <View
                  style={{
                    gap: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{objectFit: 'contain', width: 170, height: 150, marginHorizontal:5}}
                    source={item.img}
                  />
                  <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  <Text style={{fontWeight: 'bold'}}>{item.desc}</Text>
                  <Text style={{color: 'green', fontWeight: 'bold'}}>
                    RS:{item.price}
                  </Text>
                </View>
              </>
            )}
          />
        </View>



        {/* list for deserts */}
        <View style={{width: '100%', height: 270, gap: 5, marginTop: 5}}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 25,
              marginTop: 15,
            }}>
            DESERTS
          </Text>
          <FlatList
            style={{}}
            data={Data6}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <View
                  style={{
                    gap: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{objectFit: 'contain', width: 170, height: 150, marginHorizontal:5}}
                    source={item.img}
                  />
                  <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  <Text style={{fontWeight: 'bold'}}>{item.desc}</Text>
                  <Text style={{color: 'green', fontWeight: 'bold'}}>
                    RS:{item.price}
                  </Text>
                </View>
              </>
            )}
          />
        </View>




      </ScrollView>
    </View>
  );
}

export default MenuSlider;
