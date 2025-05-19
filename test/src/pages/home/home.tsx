
import { Box, Button, InputAdornment, InputBase, styled } from '@mui/material';
import styles from './home.module.scss';
import { IoMdSearch } from "react-icons/io";
import { ColorButton } from '../../util/btn';
import { useState } from 'react';
import hero from '../../assets/hero.jpg'

const buttons =[
    "All Purpose",
    "Co Space",
    "Meeting",
    "Private Meeting Room",
    "Desk",
    "Full Day Access"
]

interface ListDetails{
    listName:string,
    date:string,
    price:string
}
const listDetails:ListDetails[] = [
    {
      listName: "Private Room Rent",
      date: "Feb 15, 2024",
      price: "130"
    },
    {
      listName: "Coworking Day Pass",
      date: "Feb 18, 2024",
      price: "25"
    },
    {
      listName: "Meeting Room Booking",
      date: "Feb 20, 2024",
      price: "70"
    },
    {
      listName: "Full Access Monthly",
      date: "Feb 01, 2024",
      price: "200"
    },
    {
      listName: "Desk Rental",
      date: "Feb 22, 2024",
      price: "50"
    },
    {
      listName: "Team Room Rent",
      date: "Feb 10, 2024",
      price: "160"
    },
    {
      listName: "Hot Desk Access",
      date: "Feb 17, 2024",
      price: "30"
    },
    {
      listName: "Event Space Booking",
      date: "Feb 25, 2024",
      price: "100"
    }
  ];
  

const CustomInput = styled(InputBase)(({ theme }) => ({
    border: '1px solid #000000',
    borderRadius: 8,
    padding: '0.6rem 0.8rem',
    fontSize: 14,
    width: '90vw',
    maxWidth:"25.5rem",
    backgroundColor: '#fff',
    transition: 'border 0.2s ease',
    '&:hover': {
      borderColor: '#999',
    },
    '&.Mui-focused': {
      borderColor: theme.palette.primary.main,
    },
    '& input': {
      padding: 0,
      marginLeft: 12,
      fontFamily: 'sans-serif',
    },
  }));

export default function Home() {
    const [clickIndex, setClickIndex]=useState<number>(0)
  return (
    <div className={styles.mainConatiner}>
        <div className={styles.locationContainer}>
            <p className={styles.find}>Find places near</p>
            <p className={styles.location}>San Francisco, USA</p>
        </div>
        <div className={styles.serachContainer}>
        <CustomInput
            placeholder="Search"
            startAdornment={
                <InputAdornment position="start">
                    <IoMdSearch size={18}/>
                </InputAdornment>
            }
        />
        </div>
        <Box
        sx={{
            width: '90%',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            display: 'flex',
            gap: 1.5,   
            py: 2,
            scrollbarWidth: 'none',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
            display: 'none',
            },
        }}
        >
        {buttons.map((item, index) => (
            <ColorButton
                textColor={clickIndex===index ? "white":"black"}
                bgColor={clickIndex===index ? "#BF77F6":"white"}
                fontSize="0.8rem"
                padding="0.8rem 1rem"
                key={item}
                sx={{
                    flexShrink: 0,
                    border: clickIndex === index ? 'none' : '1px solid black',
                    borderRadius: '0.5rem',
                    textTransform: 'none',
                }}
                onClick={()=>{setClickIndex(index)}}
            >
            {item}
            </ColorButton>
        ))}
        </Box>
        <Box
            sx={{
               marginTop:"1rem",
                width: '100%',
                
                overflowY: 'auto',
                whiteSpace: 'nowrap',
                display: 'flex',
                flexDirection:'column',
                justifyContent:'start',
                alignItems:'center',
                gap: 1.5,   
                py: 1,
                scrollbarWidth: 'none',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                '&::-webkit-scrollbar': {
                display: 'none',
                },
            }}
        >
        <div className={styles.detailsConatiner}>
            <img className={styles.hero} src={hero} />
            <div className={styles.details}>
                <div className={styles.names}>
                    <p className={styles.twrName}>Blue Tower Coworking</p>
                    <p className={styles.addrs}>123 Meridian Street, San francisco</p>
                </div>
                <p className={styles.price}>$150<span className={styles.period}>/mo</span></p>
            </div>
        </div>
        <div className={styles.list}>
            <div className={styles.ListHead}>
                <p className={styles.listHeadName}>Last Activity</p>
                <p className={styles.listAll}>See all</p>
            </div>
                {
                    listDetails.map((item:ListDetails)=>(
                        <div key={item.date} className={styles.ListContetnt}>
                            <div className={styles.listImg}/>
                            <div className={styles.singleListDetails}>
                                <p className={styles.detailName}>{item.listName}</p>
                                <p className={styles.detailDate}>{item.date}</p>
                            </div>
                            <p className={styles.listPrice}>${item.price}</p>
                        </div>
                    ))
                }
            
        </div>
        </Box>
    </div>
  )
}
