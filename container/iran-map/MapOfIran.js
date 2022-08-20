import React,{useEffect} from 'react'
import InteractiveIranMap from 'iran-map'
import classes from './index.module.scss'

const yourData = {
    alborz: 'البرز',
    ardebil: 'اردبیل',
    azerbaijansharghi: 'آذربایجان شرقی',
    azerbaijangharbi: 'آذربایجان غربی',
    bushehr: 'بوشهر',
    chvab: 'چهارمحال و بختیاری',
    fars: 'فارس',
    gilan: 'گیلان',
    golestan: 'گلستان',
    hamedan: 'همدان',
    hormozgan: 'هرمزگان',
    ilam: 'ایلام ',
    esfehan: 'اصفهان',
    kerman: 'کرمان',
    kermanshah: 'کرمانشاه',
    khorasanshomali: 'خراسان‌شمالی',
    khorasanrazavi: 'خراسان‌رضوی',
    khorasanjunubi: 'خراسان‌جنوبی',
    khuzestan: 'خوزستان',
    kvab: 'کهگیلویه و بویراحمد',
    kordestan: 'کردستان',
    lorestan: 'لرستان',
    markazi: 'مرکزی',
    mazandaran: 'مازندران',
    ghazvin: 'قزوین',
    ghom: 'قم',
    semnan: 'سمنان',
    svab: 'سیستان و بلوچستان',
    tehran: 'تهران',
    yazd: 'یزد',
    zanjan: 'زنجان',
    khazar: 'دریاچه خزر',
    khalijefars: 'خلیج فارس',
    khark: 'خارک',
    kish: 'کیش',
    hormoz: 'هرمز',
    gheshm: 'قشم',
    lark: 'لارک',
    lavan: 'لاوان',
    faror: '0',
    hendorabi: 'هندورابی',
    hengam: 'هنگام',
    siri: 'سیری',
    abumusa: 'ابوموسی',
    tonbebozorg: 'تنگ‌بزرگ',
    tonbekuchak: 'تنگ‌کوچک'
  }

  let data = [
    {
      "id": 12165668,
      "fname": "آذربایجان غربی"
    },
    {
      "id": 12165663,
      "fname": "اردبیل"
    },
    {
      "id": 12165666,
      "fname": "ایلام"
    },
    {
      "id": 12165669,
      "fname": "بوشهر"
    },
    {
      "id": 12165672,
      "fname": "خراسان جنوبی"
    },
    {
      "id": 12165674,
      "fname": "خراسان شمالی"
    },
    {
      "id": 12165675,
      "fname": "خوزستان"
    },
    {
      "id": 12165676,
      "fname": "زنجان"
    },
    {
      "id": 12165677,
      "fname": "سمنان"
    },
    {
      "id": 12165679,
      "fname": "فارس"
    },
    {
      "id": 12165680,
      "fname": "قزوین"
    },
    {
      "id": 12165681,
      "fname": "قم"
    },
    {
      "id": 12165683,
      "fname": "کرمان"
    },
    {
      "id": 12165685,
      "fname": "کهکیلویه و بویراحمد"
    },
    {
      "id": 12165686,
      "fname": "گلستان"
    },
    {
      "id": 12165687,
      "fname": "گیلان"
    },
    {
      "id": 12165689,
      "fname": "مازندران"
    },
    {
      "id": 12165690,
      "fname": "مرکزی"
    },
    {
      "id": 12165693,
      "fname": "یزد"
    },
    {
      "id": 12165667,
      "fname": "آذربایجان شرقی"
    },
    {
      "id": 12165664,
      "fname": "اصفهان"
    },
    {
      "id": 12165665,
      "fname": "البرز"
    },
    {
      "id": 12165670,
      "fname": "تهران"
    },
    {
      "id": 12165671,
      "fname": "چهارمحال و بختاری"
    },
    {
      "id": 12165673,
      "fname": "خراسان رضوی"
    },
    {
      "id": 12165678,
      "fname": "سیستان و بلوچستان"
    },
    {
      "id": 12165682,
      "fname": "کردستان"
    },
    {
      "id": 12165684,
      "fname": "کرمانشاه"
    },
    {
      "id": 12165688,
      "fname": "لرستان"
    },
    {
      "id": 12165691,
      "fname": "هرمزگان"
    },
    {
      "id": 12165692,
      "fname": "همدان"
    }
  ]

const MapOfIran = ({setSelectedState}) => {

    useEffect(() => {
        init()
        // eslint-disable-next-line
    }, [])

    const init = async ()=>{
        let elements = document.getElementsByTagName('path')
        var arr = Array.prototype.slice.call( elements )
        for(let el of arr){
            el.addEventListener('click' , handleClick)
        }
    }

    const handleClick = (e)=>{

    }

    return (
        <div id="mapContainer">
            <InteractiveIranMap
                height={700} // default value is 600px
                selectedArea={'tehran'} // default value is tehran
                selectedAreaColor='#1447E8' // default value is '#00f'
                selectedAreaTextColor='#1447E8' // deafult value is '#fff'
                unselectedAreaTextColor='transparent' // default value is '#000'
                backgroundColor='transparent' // default value is '#fff'
                data={yourData} // default value for all areas is based on test data bleow as "yourData"
            />
        </div>
    )
}

export default MapOfIran