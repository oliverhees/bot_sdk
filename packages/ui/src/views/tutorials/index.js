import { useSelector } from 'react-redux'

// material-ui
import { Box, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import MainCard from 'ui-component/cards/MainCard'
import ToolEmptySVG from 'assets/images/tools_empty.svg'

// ==============================|| CHATFLOWS ||============================== //

const Tutorials = () => {
    const theme = useTheme()
    const customization = useSelector((state) => state.customization)

    return (
        <>
            <MainCard sx={{ background: customization.isDarkMode ? theme.palette.common.black : '' }}>
                <Stack flexDirection='row'>
                    <h1>Tutorials</h1>
                </Stack>

                <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                    <Box sx={{ p: 2, height: 'auto' }}>
                        <img style={{ objectFit: 'cover', height: '30vh', width: 'auto' }} src={ToolEmptySVG} alt='ToolEmptySVG' />
                    </Box>
                    <div>Noch keine Tutorials geladen!</div>
                </Stack>
            </MainCard>
        </>
    )
}

export default Tutorials
