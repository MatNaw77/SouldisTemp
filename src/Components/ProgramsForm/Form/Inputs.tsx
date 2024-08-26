import { Box, FormLabel, Input, Textarea, Select } from '@chakra-ui/react'

const Inputs = () => {
    return (
        <Box
            borderBottom='1px solid'
            borderColor='gray.200' pb='30px'
        >
            <Box
                display='flex'
                justifyContent='space-between'
                pb='18px'
            >
                <Box width='49.5%'>
                    <FormLabel htmlFor='name'>Name*</FormLabel>
                    <Input id='name' placeholder='Create name' />
                </Box>
                <Box width='49.5%'>
                    <FormLabel htmlFor='options' >
                        Choose an option
                    </FormLabel>
                    <Select id='options' placeholder='Select option'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>
            </Box>
            <Box width='100%' my='4px'>
                <FormLabel htmlFor='name'>Description*</FormLabel>
                <Textarea
                    id='description'
                    placeholder='Write the description...'
                    size='sm'
                    resize='none'
                    minHeight='80px'
                />
            </Box>
        </Box>

    )
}

export default Inputs;