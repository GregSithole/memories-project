import React from 'react'
import { Typography } from '@material-tailwind/react';
import { Container, AppBar, Grow, Grid} from '@material-ui/core'

import memories from './images/memories.png'

const App = () => {
    return (
        <Container maxWidth='lg'>
			<AppBar position='static' color='inherit'>
				<Typography variant='h2' align='center'>Memories</Typography>
				<img src={memories} alt='memores' height='60' />
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justifyContent='space-between' alignItems='strech' spacing={3}>
						<Grid item xs={12} sm={7}>
							<Post />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
    )
}

export default App;