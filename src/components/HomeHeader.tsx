import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
    return (
        <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
            <UserPhoto source={{ uri: 'https://github.com/marcosxk122.png' }} size={16} alt="Imagem do usuário" mr={4} />
            <VStack flex={1}>
                <Text color='gray.100' fontSize='md'>Olá,</Text>
                <Heading color='gray.100' fontSize='md' fontFamily='heading'>Marcos</Heading>
            </VStack>
            <TouchableOpacity>
                <Icon as={MaterialIcons} size={7} name="logout" color='gray.200' />
            </TouchableOpacity>
        </HStack>
    )
};
