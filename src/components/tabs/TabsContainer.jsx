import React from 'react'
import { Tab, Tabs } from '@mui/material';
import { grey } from '@mui/material/colors';
const TabsContainer = ({value,handleChange , mode}) => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        };
    };
  return (
    <>
     <Tabs
        orientation="horizontal"
        variant="fullWidth"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
        textColor={'secondary'}
        indicatorColor={'secondary'}
      >
        <Tab
          label=" ورود "
          iconPosition="start"
          {...tabProps(0)}
        />
        <Tab
          label=" ثبت نام "
          iconPosition="start"
          {...tabProps(1)}
        />
</Tabs>
    </>
  )
}

export default TabsContainer