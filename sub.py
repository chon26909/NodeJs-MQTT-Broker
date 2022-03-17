import paho.mqtt.client as mqtt
import os
import datetime

def on_connect(client, userdata, flags, rc):

    print("Connected with result code "+str(rc))
    client.subscribe("camera/picture")


def on_message(client, userdata, message):

    if (message.topic == "camera/picture"):

        suffix = datetime.datetime.now().strftime("%y%m%d_%H%M%S")

        filename_image = "D:/Project/IoT/Nodejs-MQTT-Broker/images/image_" + str(suffix) + '.jpg'

        print(filename_image)

        f = open(filename_image, "wb")  # 'w' for 'write', 'b' for 'write as binary, not text'
        f.write(message.payload)
        f.close()


client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect("192.168.1.150", 4000, 60)

client.loop_forever()
