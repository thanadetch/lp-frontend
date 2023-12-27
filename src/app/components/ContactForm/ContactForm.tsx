import {Button, Card, Form, Input, Select, Space} from "antd";
import React from "react";

export const ContactForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({note: "Hello world!", gender: "male"});
    };

    return (
        <Card title={"Interested in the property? Contact us now!"} className={"shadow-lg"}>
            <Form
                layout="vertical"
                form={form}
                name="control-hooks"
                onFinish={onFinish}
            >
                <Form.Item name="name" label="Name" rules={[{required: true}]}>
                    <Input size={"large"}/>
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{required: true}]}>
                    <Input size={"large"}/>
                </Form.Item>
                <Form.Item name="phone" label="Phone Number">
                    <Input size={"large"}/>
                </Form.Item>
                <Form.Item name="lineId" label="Line ID">
                    <Input size={"large"}/>
                </Form.Item>
                <Form.Item>
                    <Button size={"large"} type="primary" htmlType="submit" className={"w-full"}>Submit</Button>
                </Form.Item>
            </Form>
        </Card>

    );
};
