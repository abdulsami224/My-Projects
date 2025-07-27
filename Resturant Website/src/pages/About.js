import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box
            sx={{
                my: 15,
                textAlign: 'center',
                p: 2,
                "& h4": {
                    fontWeight: "bold",
                    my: 2,
                    fontSize: "2rem"
                },
                "& p": {
                    textAlign: "justify"
                },
                "@media (max-width: 600px)": {
                    mt: 0,
                    "& h4": {
                        fontSize: "1.5rem"
                    },
                },
            }}
        >
          <Typography variant='h4'>Welcome to my Resturant</Typography>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, 
            justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper 
            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, 
            justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper 
            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>
        </Box>
    </Layout>
  )
}

export default About