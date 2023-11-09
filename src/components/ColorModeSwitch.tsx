import { HStack, Switch, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'


const ColorModeSwitch = () => {
    const {toggleColorMode,colorMode} = useColorMode()
  return (
    <HStack>
        <Switch colorScheme="pink" isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        
         {colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
        
    </HStack>
  )
}

export default ColorModeSwitch