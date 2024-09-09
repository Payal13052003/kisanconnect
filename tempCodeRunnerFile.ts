import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, Image, Switch, Textarea } from '@chakra-ui/react';
function Profile() {

const Profile = () => {
  // Example data; in a real application, you'd fetch this from an API or a database
  const profileData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    city: 'New Delhi',
    state: 'Delhi',
    rating: 4.5,
    profilePicture: 'https://via.placeholder.com/150',
    businessName: 'John’s Farm',
    businessAddress: '123 Farm Lane',
    landArea: '10 acres',
    farmingType: 'Organic',
    hasTransportService: true,
    isCertified: true
  };

  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack spacing={4} align="start">
        <Heading as="h1" size="lg">Buyer Profile</Heading>

        <Box>
          <Image
            borderRadius="full"
            boxSize="150px"
            src={profileData.profilePicture}
            alt={`${profileData.firstName} ${profileData.lastName}`}
          />
          <Text fontSize="lg" fontWeight="bold">{`${profileData.firstName} ${profileData.lastName}`}</Text>
          <Text>Email: {profileData.email}</Text>
          <Text>Phone: {profileData.phone}</Text>
        </Box>

        <FormControl id="city">
          <FormLabel>City</FormLabel>
          <Input value={profileData.city} readOnly />
        </FormControl>

        <FormControl id="state">
          <FormLabel>State</FormLabel>
          <Input value={profileData.state} readOnly />
        </FormControl>

        <FormControl id="rating">
          <FormLabel>Rating</FormLabel>
          <Input type="number" value={profileData.rating} readOnly />
        </FormControl>

        <FormControl id="businessName">
          <FormLabel>Business Name</FormLabel>
          <Input value={profileData.businessName} readOnly />
        </FormControl>

        <FormControl id="businessAddress">
          <FormLabel>Business Address</FormLabel>
          <Textarea value={profileData.businessAddress} readOnly />
        </FormControl>

        <FormControl id="landArea">
          <FormLabel>Land Area</FormLabel>
          <Input value={profileData.landArea} readOnly />
        </FormControl>

        <FormControl id="farmingType">
          <FormLabel>Farming Type</FormLabel>
          <Input value={profileData.farmingType} readOnly />
        </FormControl>

        <FormControl id="hasTransportService">
          <FormLabel>Has Transport Service</FormLabel>
          <Switch isChecked={profileData.hasTransportService} isReadOnly />
        </FormControl>

        <FormControl id="isCertified">
          <FormLabel>Is Certified</FormLabel>
          <Switch isChecked={profileData.isCertified} isReadOnly />
        </FormControl>

        <Button colorScheme="teal" size="md">Save Changes</Button>
      </VStack>
    </Box>
  );
};
}
export default Profile;