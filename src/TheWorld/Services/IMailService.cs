namespace TheWorld.Services
{
    public interface IMailService
    {
        bool sendMail(string to, string from, string subject, string body);
    }
}
