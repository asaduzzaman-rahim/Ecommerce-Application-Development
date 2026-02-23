import React from "react";
import Container from "../Component/Container";
import Grid from "../Component/Grid";
import Flex from "../Component/Flex";
import Button from "../Component/Button"

const MyAccount = () => {
  return (
    <>
      <div>
        <Container>
          <Flex className="justify-between pt-[40px] lg:pt-[80px]">
            <span>Home / My Account</span>
            <h5>
              Welcome to{" "}
              <span className="text-[#DB4444]">Asaduzzaman Rahim</span>
            </h5>
          </Flex>
          <Flex className="flex-wrap !items-start justify-between  pt-[40px] lg:pt-[80px] mb-[140px]">
            <div className="grid grid-cols-3 gap-x-[10px] lg:grid-cols-1 gap-[100px] justify-between w-full lg:!w-[30%] lg:h-[200px]">
              <div>
                <h5 className="lg:text-[16px] text-[15px] font-medium leading-[24px]">
                  Manage My Account
                </h5>
                <ul className="pt-[16px] pb-[24px] space-y-[8px]">
                  <li className="text-[#DB4444] leading-[20px]">My Profile</li>
                  <li className=" leading-[20px]">Adress Book</li>
                  <li className=" leading-[20px]">My Payment Option</li>
                </ul>
              </div>

              <div>
                <h5 className="lg:text-[16px] text-[15px] font-medium leading-[24px]">
                  My Order
                </h5>
                <ul className="pt-[16px] pb-[24px] space-y-[8px]">
                  <li className=" leading-[20px]">My Returns</li>
                  <li className=" leading-[20px]">My Cancellations</li>
                </ul>
              </div>
              <div>
                <h5 className="lg:text-[16px] text-[15px] font-medium leading-[24px]">
                  My WishList
                </h5>
              </div>
            </div>

            <div className="w-full lg:!w-[70%]  lg:py-[40px] lg:px-[80px] ">
                <h4 className="text-[20px] text-[#DB4444] font-medium ">Edit Your Profile</h4>
            
            <form action="#">
                <div className="flex justify-between lg:gap-x-[50px] items-center  pt-[16px]">
                    <div>
                        <label htmlFor="email">Frist Name</label> <br />
                        <input type="text" placeholder="Asaduzaman Rahim" className="bg-[#f5f5f5] pt-[8px] h-[50px] w-full lg:w-[330px] pl-3"  required/>
                    </div>
                    <div>
                        <label htmlFor="text">Last Name </label> <br />
                        <input type="text" placeholder="Rahim" className="bg-[#f5f5f5] pt-[8px] h-[50px] w-full lg:w-[330px] pl-3"  required/>
                    </div>
                </div>
                <div className="flex justify-between lg:gap-x-[50px] items-center  pt-[16px]">
                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input type="text" placeholder="rahim.asaduzzaman@gmail.com" className="bg-[#f5f5f5] pt-[8px] h-[50px] w-full lg:w-[330px] pl-3"  required/>
                    </div>
                    <div>
                        <label htmlFor="text">Address </label> <br />
                        <input type="text" placeholder="Joypurhat Bangladesh" className="bg-[#f5f5f5] pt-[8px] h-[50px] w-full lg:w-[330px] pl-3" required/>
                    </div>
                </div>
                <div className="py-[24px]">
                    <label className="mt-[8px]" htmlFor="password">Password Changes</label>
                    <input type="password" placeholder="Current Passwod" className="w-full  h-[50px] pl-3 bg-[#F5F5F5]"/>
                    <input type="password" placeholder="New Passwod" className="w-full h-[50px] pl-3 my-[29px] bg-[#F5F5F5]"/>
                    <input type="password" placeholder="Confirm New Passwod" className="w-full  h-[50px] pl-3 bg-[#F5F5F5]"/>
                </div>
                <div className="flex items-center justify-end gap-[32px] ">
                    <p><a href="#">Cancel</a></p>
                    <Button>SaveChanges</Button>
                </div>
            </form>

            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default MyAccount;
