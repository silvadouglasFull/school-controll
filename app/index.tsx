import { Box, Button } from "@gluestack-ui/themed";
import { useRouter } from 'expo-router';
import React from "react";

const Home: React.FC = () => {
    const router = useRouter()
    return (
        <Box className="bg-primary-500 p-5">
            <Button onPress={() => router.push('/school')}>School</Button>
        </Box>
    )
}
export default Home