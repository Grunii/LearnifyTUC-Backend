using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class Identity1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5b771794-72fb-4d81-a155-8d73384db16e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "62d35968-a7a9-487b-83e3-898fb7f9985f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "3586ea66-b8a7-4551-9db7-4cc3e93389f6", "6c6a8e30-e85e-45d8-8789-5d4d55d1cabf", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ffbcefcb-9596-439c-a9d3-e87e9ab8f680", "67ee9d32-8912-46e6-8486-21e90def0f3b", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3586ea66-b8a7-4551-9db7-4cc3e93389f6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ffbcefcb-9596-439c-a9d3-e87e9ab8f680");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "62d35968-a7a9-487b-83e3-898fb7f9985f", "92700578-c5b8-4d6e-b254-30edd5a06b6a", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5b771794-72fb-4d81-a155-8d73384db16e", "2b53bc5e-609e-43d0-acc1-bb42287a5bbd", "Instructor", "INSTRUCTOR" });
        }
    }
}
