import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { ProgressBar } from './components/ProgressBar';

export function Post(){
    return(

        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                <Text style={styles.title}>
                    Lorem ipsum dolor sit amet quuntur!
                </Text>
                <View>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti fuga inventore unde error? Culpa quis magnam perferendis, quam aspernatur exercitationem sint accusantium ab alias facilis similique iste atque recusandae.

                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum fugit veniam deserunt nihil nobis quam ab quas, laudantium optio magnam, architecto consequatur laboriosam sunt est, quos consequuntur labore ea eos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur facilis ex recusandae id nobis, sapiente veniam magni sequi obcaecati, esse doloribus possimus amet tempore dolor reprehenderit ipsam eligendi quia!
                    </Text>

                    <Text style={styles.text}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum fugit veniam deserunt nihil nobis quam ab quas, laudantium optio magnam, architecto consequatur laboriosam sunt est, quos consequuntur labore ea eos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur facilis ex recusandae id nobis, sapiente veniam magni sequi obcaecati, esse doloribus possimus amet tempore dolor reprehenderit ipsam eligendi quia!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum fugit veniam deserunt nihil nobis quam ab quas, laudantium optio magnam, architecto consequatur laboriosam sunt est, quos consequuntur labore ea eos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur facilis ex recusandae id nobis, sapiente veniam magni sequi obcaecati, esse doloribus possimus amet tempore dolor reprehenderit ipsam eligendi quia!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum fugit veniam deserunt nihil nobis quam ab quas, laudantium optio magnam, architecto consequatur laboriosam sunt est, quos consequuntur labore ea eos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur facilis ex recusandae id nobis, sapiente veniam magni sequi obcaecati, esse doloribus possimus amet tempore dolor reprehenderit ipsam eligendi quia!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum fugit veniam deserunt nihil nobis quam ab quas, laudantium optio magnam, architecto consequatur laboriosam sunt est, quos consequuntur labore ea eos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur facilis ex recusandae id nobis, sapiente veniam magni sequi obcaecati, esse doloribus possimus amet tempore dolor reprehenderit ipsam eligendi quia!
                    </Text>
                </View>

            </ScrollView>

            <ProgressBar></ProgressBar>

        </View>
    );
}