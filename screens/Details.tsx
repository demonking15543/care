import {
    Card,
    Title,
    Paragraph,
    List,
    PaperProvider,
  } from 'react-native-paper';
import Header from '../components/Header';
  
const DetailsScreen = (props:any) => {
    const { title, content } = props?.route?.params;
    return (
      <List.Section>

        <List.Subheader>{title}</List.Subheader>
        <List.Item title={content} />
      </List.Section>
    );
  };

  export default DetailsScreen
  