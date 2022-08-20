import React, { useState , useEffect } from 'react'
import MapOfIran from './MapOfIran'
// import MapMultiBarChart from '../../../../components/management/site_management_office/MapMultiBarChart'
// import CustomBtn from '../../../../components/utils/CustomBtn'
// import history from '../../../../history'
// import {connect} from 'react-redux'
// import { getOfficeWaybillsReport } from '../../../../Redux/actions/OfficeAction'
// import { commafy } from '../../../../methods/utils'
// import { FormControl } from '@material-ui/core';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import { toast } from 'react-toastify';
// import CustomDropDown from '../../../../components/utils/CustomDropDown'
// import CustomDateRangePicker from '../../../../components/utils/CustomDateRangePicker'
// import CustomDatePicker from '../../../../components/utils/CustomDatePicker'
// import Fade from '@material-ui/core/Fade'

const Map = () => {

    // const [reports , setReports] = useState([])

    // const [selectedOffice , setSelectedOffice] = useState({
    //     chart_data : [],
    //     office : {}
    // })

    // const [filter , setFilter] = useState({id : 0 , name : 'سالانه'})
    // const [orderKind , setOrderKind] = useState({id : "no" , name : 'تعداد سفارشات ثبت شده'})
    
    // const [dateRange , setDateRange] = useState({
    //     start_date : null,
    //     end_date : null
    // })

    // const OnChangeDateRange = (name , value)=>{
    //     setDateRange({
    //         ...dateRange,
    //         [name] : value
    //     })
    // }
    
    // const filterList = [
    //     {id : 0 , name : 'سال جاری'},
    //     {id : 1 , name : 'ماه جاری'},
    //     {id : 2 , name : 'انتخاب بازه'},
    // ]

    // const OnChange = (name ,value)=>{
    //     setFilter(value)
    // }

    // const OnChangeOrderKind = (name, value) => {
    //     setOrderKind(value)
    // }

    // const [dataNav , setDataNav] = useState(3)

    const [selectedState , setSelectedState] = useState({
        id:12165670,
        fname:"تهران"
    })

    // useEffect(() => {
    //     initReport()
    //     // eslint-disable-next-line
    // }, [selectedState , filter , dateRange, orderKind])

    // const initReport = async ()=>{
    //     if(filter.id===2){
    //         if(!dateRange.start_date || !dateRange.end_date){
    //             return
    //         }
    //     }
    //     let res = await getOfficeWaybillsReport(selectedState.id , filter , dateRange, orderKind.id)
    //     if(res.length!==0){
    //         setReports(res)
    //         setSelectedOffice(res[0])
    //     }else{
    //         toast.warn(<p className="text-center text-light">
    //         دفتری برای این استان وجود ندارد
    //         </p> , {
    //             position: "top-right",
    //             autoClose : 4000,
    //         })
    //     }
    // }

    // const ChartLegend = ({text , color})=>(
    //     <div className="d-flex align-items-center" style={{gap:'0.5rem'}}>
    //         <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <rect width="7.8394" height="7.98858" rx="3.9197" transform="matrix(0.999985 -0.0054928 -0.00539025 0.999985 0.34082 0.734406)" fill={color}/>
    //         </svg>
    //         <p style={{fontSize:'12px'}} className="my-auto">{text}</p>
    //     </div>
    // )

    // const Statistics = ({title , value1 , value2})=>(
    //     <div style={{gap:'1rem' ,fontSize:'0.8rem'}} className="w-100 mt-2 text-right d-flex justify-content-between align-items-center">
    //         <p style={{width:'40%'}} className="my-auto">{title}</p>
    //         <p style={{ color:'#656467' , width:'30%'}} className="my-auto">{commafy(value1)}</p>
    //         <p style={{ color:'#656467' , width:'30%'}} className="my-auto">{commafy(value2)}</p>
    //     </div>
    // )

    // const RedirectToManageOfficeInfo = () => {
    //     history.push("/dashboard/Map_details")
    // }

    return (
        <div>
            <div className="d-flex justify-content-around" style={{gap:'2rem'}}>
                {/* <div className="box p-4" style={{width:"7000px" , borderRadius:'16px' , boxShadow:'0px 1px 3px rgba(0, 0, 0, 0.15)'}}>
                    <div className="d-flex align-items-center">
                        <p className="my-auto text-right w-100">استان {selectedState.fname}</p>
                        <div className="w-100">
                            <CustomDropDown disabledClear name="filter" label="بازه زمانی" value={filter} OnChange={OnChange} list={filterList} noFilter filterStyle filterOption="name"/>
                        </div>
                        <Fade in={filter.id===2}>
                            <div>
                                <CustomDateRangePicker>
                                    <CustomDatePicker name="start_date" OnChange={OnChangeDateRange} value={dateRange.start_date} placeholder="تاریخ آغاز"/>
                                    <CustomDatePicker name="end_date" OnChange={OnChangeDateRange} value={dateRange.end_date} placeholder="تاریخ پایان"/>
                                </CustomDateRangePicker>
                            </div>
                        </Fade>
                    </div>
                    <div className="d-flex mt-3" style={{gap:'0.5rem'}}>
                        <FormControl className="w-100" fullWidth variant="outlined">
                            <InputLabel>دفتر</InputLabel>
                            <Select
                                name="office"
                                value={selectedOffice}
                                label="دفتر"
                                onChange={(e)=>setSelectedOffice(e.target.value)}                      
                            >
                            {
                                reports.map(reg=>(
                                    <MenuItem key={reg.office.id} value={reg}>{reg.office.fname}</MenuItem>
                                ))
                            }
                            </Select>
                        </FormControl>
                        <CustomBtn 
                            text="جزئیات"
                            background="#F2C94C"
                            color="#FFFFFF"
                            height="100%"
                            padding=".4rem 1.2rem"
                            OnClick={RedirectToManageOfficeInfo}
                        />
                    </div>
                    <div style={{borderRadius:'10px' , border:'1px solid #E0E0E0'}} className="p-3 mt-4">
                        <div className="d-flex" style={{justifyContent:'space-evenly' , borderBottom:'1px solid #E0E0E0'}}>
                            <p onClick={()=>setDataNav(1)} style={{borderBottom : dataNav===1 ? "1px solid #111" : '' , cursor:'pointer'}} className="my-auto text-right pb-2">داخلی</p>
                            <p onClick={()=>setDataNav(2)} style={{borderBottom : dataNav===2 ? "1px solid #111" : '' , cursor:'pointer'}} className="my-auto text-right pb-2">صادرات</p>
                            <p onClick={()=>setDataNav(3)} style={{borderBottom : dataNav===3 ? "1px solid #111" : '' , cursor:'pointer'}} className="my-auto text-right pb-2">واردات</p>
                        </div>
                        {dataNav===1 && 
                            <div className="d-flex justify-content-between align-items-start mt-3">
                                <div className="d-flex flex-column" style={{gap:'1rem'}}>
                                    <Statistics title="وزن حجمی" value={0}/>
                                    <Statistics title="وزن جرمی" value={0}/>
                                    <Statistics title="سفارشات تایید‌شده" value={0}/>
                                </div>
                                <div className="d-flex flex-column" style={{gap:'1rem'}}>
                                    <Statistics title="تعداد WPX" value={0}/>
                                    <Statistics title="تعداد DOX" value={0}/>
                                </div>
                            </div>
                        }
                        {dataNav===2 && 
                            <div className="d-flex justify-content-between align-items-start mt-3">
                                <div className="d-flex flex-column" style={{gap:'1rem'}}>
                                    <Statistics title="وزن حجمی" value={selectedOffice.exports_sum_cargo_volume_weight}/>
                                    <Statistics title="وزن جرمی" value={selectedOffice.exports_sum_cargo_mass_weight}/>
                                    <Statistics title="سفارشات تایید‌شده" value={selectedOffice.submitteds_exports}/>
                                </div>
                                <div className="d-flex flex-column" style={{gap:'1rem'}}>
                                    <Statistics title="تعداد WPX" value={selectedOffice.exports_sum_cargo_wpx}/>
                                    <Statistics title="تعداد DOX" value={selectedOffice.exports_sum_cargo_dox}/>
                                </div>
                            </div>
                        }
                        {dataNav===3 && 
                            <div className="d-flex flex-column mt-2">
                                <div style={{gap:'1rem' , fontSize:'0.8rem' ,fontWeight:'bold' , borderBottom:'1px solid #F8F8F8' }} className="text-right pb-2 w-100 d-flex justify-content-between align-items-center">
                                    <p style={{color:'#656467' , width:'40%'}} className="my-auto">عنوان</p>
                                    <p style={{color:'#656467' , width:'30%'}} className="my-auto">تایید شده</p>
                                    <p style={{color:'#656467' , width:'30%'}} className="my-auto">ثبت شده</p>
                                </div>
                                <Statistics title="تعداد سفارشات" value1={selectedOffice.submitteds_imports} value2={selectedOffice.total_imports}/>
                                <Statistics title="وزن جرمی" value1={selectedOffice.submitteds_imports_sum_cargo_mass_weight} value2={selectedOffice.registereds_imports_sum_cargo_mass_weight}/>
                                <Statistics title="وزن حجمی" value1={selectedOffice.submitteds_imports_sum_cargo_volume_weight?.toFixed(3)} value2={selectedOffice.registereds_imports_sum_cargo_volume_weight?.toFixed(3)}/>
                                <Statistics title="تعداد WPX" value1={selectedOffice.submitteds_imports_sum_cargo_wpx} value2={selectedOffice.registereds_imports_sum_cargo_wpx}/>
                                <Statistics title="تعداد DOX" value1={selectedOffice.submitteds_imports_sum_cargo_dox} value2={selectedOffice.registereds_imports_sum_cargo_dox}/>                        
                            </div>
                        }
                    </div>
                    <div style={{borderRadius:'10px' , border:'1px solid #E0E0E0'}} className="p-3 mt-3">
                        <div className="d-flex justify-content-between w-100">
                            <CustomDropDown disabledClear name="OrderKind" label="نمودار بر اساس " value={orderKind} OnChange={OnChangeOrderKind} 
                                list={[
                                    {id : "no" , name : 'تعداد سفارشات ثبت شده'},
                                    {id : "yes" , name : 'تعداد سفارشات تایید شده'},
                                ]} 
                                noFilter filterStyle filterOption="name"
                            />
                        </div>
                        <div className="d-flex mt-4" style={{gap:'2rem'}}>
                            <ChartLegend text="داخلی" color="#F3AA18"/>
                            <ChartLegend text="واردات" color="#FF4B55 "/>
                            <ChartLegend text="صادرات" color="#2FA84F"/>
                        </div>
                        <div className="w-100 mt-3 d-flex justify-content-center" style={{height:'400px' , fontFamily:'IRANYekanRegularFaNum'}}>
                            {selectedOffice.chart_data && <MapMultiBarChart data={selectedOffice}/>}
                        </div>
                    </div>
                </div> */}
                <MapOfIran selectedState={selectedState} setSelectedState={setSelectedState}/>
            </div>
        </div>
    )
}

export default Map
