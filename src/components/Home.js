import { APP_NAME } from "@env";
import { Text, View } from "react-native";
import { setError } from "../actions/screenNotification";
import { connect } from "react-redux";


const Home = (props) => {
    const error = {
        type: 'warn',
        isOpen: true,
        msg: "Croissant lollipop candy cookie bonbon liquorice cheesecake pudding apple pie. Jelly dessert chocolate pie fruitcake tart cake. Caramels shortbread jelly-o bear claw sweet roll bonbon liquorice biscuit. Cupcake lemon drops liquorice bear claw fruitcake bear claw croissant. Oat cake donut pudding fruitcake muffin sesame snaps. Cupcake powder dragée candy canes shortbread cotton candy. Cake lollipop brownie jelly gingerbread muffin sweet roll jujubes. Candy croissant fruitcake cake gummies oat cake gingerbread lollipop. Candy croissant pudding pudding ice cream. Marshmallow tootsie roll lemon drops soufflé jujubes dragée shortbread biscuit marshmallow. Halvah biscuit cake chupa chups marzipan macaroon. Croissant danish ice cream cake cupcake icing gingerbread marzipan. Topping candy canes caramels jujubes sesame snaps carrot cake caramels fruitcake liquorice.",
      };

      props.setError(error);

    
    return (
        <View>
            <Text>{APP_NAME}</Text>
        </View>
        
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      setError: (error) => dispatch(setError(error)),
    }
  }

export default connect(null, mapDispatchToProps)(Home)
